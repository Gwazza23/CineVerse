import "./CastCard.css";

function CastCard({ credits }) {
  const cast = credits.cast;
  
  return (
    <div className="cast-card-container">
    <h2>Cast</h2>
    <div className="cast-card-div">
      {cast &&
        cast.map((member) => {
          return (
            <div key={member.id}>
              {member.profile_path !== null ? (
                <div className="cast-card">
                  <img
                    src={`https://image.tmdb.org/t/p/w154${member.profile_path}`}
                    alt={member.name}
                  />
                  <h4>{member.name}</h4>
                </div>
              ) : null}
            </div>
          );
        })}
    </div>
    </div>
  );
}

export default CastCard;
