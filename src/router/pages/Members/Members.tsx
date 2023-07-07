import { useNavigate } from "react-router-dom";
import Layout from "../../../components/Layout";
import MembersTable from "../../../components/MembersTable";
import Member from "../../../interfaces/Member";

import membersData from "../../../mocks/members.json";

const Members = () => {
  const navigate = useNavigate();



  return (
    <Layout>
      <MembersTable
        members={membersData.members as unknown as Member[]}
        onTeamClick={(teamId: number) => navigate(`/team/${teamId}`)}
      />
    </Layout>
  );
}

export default Members;
