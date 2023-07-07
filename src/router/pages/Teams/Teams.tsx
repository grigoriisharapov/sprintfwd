import Layout from "../../../components/Layout";
import TeamsTable from "../../../components/TeamsTable";
import Team from "../../../interfaces/Team";

import teamsData from "../../../mocks/teams.json";

const Teams = () => {
  return (
    <Layout>
      <TeamsTable teams={teamsData.teams as unknown as Team[]} />
    </Layout>
  );
}

export default Teams;
