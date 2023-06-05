import "./Button.css";

function Button({ page, onClick }) {
  if (page === "nextPage") {
    return (
      <button className="btn" onClick={onClick} >
        Next Page
      </button>
    );
  } else if (page === "previousPage") {
    return (
      <button className="btn" onClick={onClick}>
        Previous Page
      </button>
    );
  }
}

export default Button;
