type users = {
  skills: Array<string>;
  daoXP: number;
  superXP: number;
  walletAddress: string;
  name: string;
  id: string;
};
type userApi = {
  results: Array<users>;
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
};
const Id = () => {
  // if()
  return <>hello</>;
};
export default Id;
