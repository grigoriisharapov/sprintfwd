import { FC } from "react";
import Member from "../../interfaces/Member"
import UITable from "../UITable";
import style from './MembersTable.module.css'

const MembersTable: FC<{
  members: Member[];
  onTeamClick: (memberId: number) => void;
}> = ({ members, onTeamClick }) => {
  return (
    <div>
      <UITable>
        <UITable.Row>
          <UITable.Item th>Id</UITable.Item>
          <UITable.Item th>First name</UITable.Item>
          <UITable.Item th>Last name</UITable.Item>
          <UITable.Item th>Email</UITable.Item>
          <UITable.Item th>Team</UITable.Item>
        </UITable.Row>
        {members.map((member) => (

          <UITable.Row key={member.id}>
            <UITable.Item>{member.id}</UITable.Item>
            <UITable.Item>{member.first_name}</UITable.Item>
            <UITable.Item>{member.last_name}</UITable.Item>
            <UITable.Item>{member.email}</UITable.Item>
            <UITable.Item>
              <button className={style.button} onClick={() => onTeamClick(member.team.id)}>
                {member.team.name}
              </button>
            </UITable.Item>
          </UITable.Row>


        ))}
      </UITable>

    </div>
  )
}

export default MembersTable;
