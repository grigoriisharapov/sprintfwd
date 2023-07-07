import { FC } from "react";
import Member from "../../interfaces/Member";
import UITable from "../UITable";

const TeamMemberList: FC<{ members: Member[] }> = ({ members }) => {
  return (
    <UITable>
      <UITable.Row>
        <UITable.Item th>Id</UITable.Item>
        <UITable.Item th>First name</UITable.Item>
        <UITable.Item th>Last name</UITable.Item>
        <UITable.Item th>Email</UITable.Item>
      </UITable.Row>
      {members.map((member) => (
        <UITable.Row key={member.id}>
          <UITable.Item>{member.id}</UITable.Item>
          <UITable.Item>{member.first_name}</UITable.Item>
          <UITable.Item>{member.last_name}</UITable.Item>
          <UITable.Item>{member.email}</UITable.Item>
        </UITable.Row>
      ))}
    </UITable>
  )
}

export default TeamMemberList;

