import { useParams } from "react-router-dom";
import BannerCard from "./Cards/BannerCard";

function MoviePage() {
  const {id} = useParams();

  return <div>
    <BannerCard />
  </div>;
}

export default MoviePage;
