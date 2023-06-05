import { useParams } from "react-router-dom";

function MoviePage() {
  const {id} = useParams();
  console.log(id)
  return <div>MoviePage</div>;
}

export default MoviePage;
