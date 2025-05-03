import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();

  return <h2>Szczegóły użytkownika ID: {id}</h2>;
};

export default UserDetails;
