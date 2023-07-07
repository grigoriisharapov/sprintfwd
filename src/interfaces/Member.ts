export default interface MemberI {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  team: {
    id: number;
    name: string;
  };
}
