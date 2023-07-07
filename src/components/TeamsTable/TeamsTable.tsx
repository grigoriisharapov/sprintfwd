import { FC } from "react";
import Team from "../../interfaces/Team";
import UITable from "../UITable";

const TeamsTable: FC<{
  teams: Team[];
}> = ({ teams }) => {
  return (
    <UITable>
      <UITable.Row>
        <UITable.Item th>Id</UITable.Item>
        <UITable.Item th>Name</UITable.Item>
        <UITable.Item th>Member Count</UITable.Item>
      </UITable.Row>

      {teams.map((team) => (
        <UITable.Row key={team.id}>
          <UITable.Item>{team.id}</UITable.Item>
          <UITable.Item>{team.name}</UITable.Item>
          <UITable.Item>{team.member_count}</UITable.Item>
        </UITable.Row>
      ))}
    </UITable>
  )
}

export default TeamsTable;
