import { useNavigate, useParams } from "react-router-dom";
import Member from "../../../interfaces/Member";

import membersData from "../../../mocks/members.json";
import TeamMemberList from "../../../components/TeamMembersList";
import Layout from "../../../components/Layout";
import UIButton from "../../../components/UIButton";
import style from './Team.module.css';

const members = membersData.members as unknown as Member[];

const Team = ({ match }: any) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const teamMembers = members.filter((member) => {
    return member.team.id === Number(id);
  });



  return (
    <Layout>
      <UIButton className={style.button} onClick={() => navigate('/members')}>Back to Members</UIButton>
      <TeamMemberList members={teamMembers} />
    </Layout>
  );
}



export default Team;
