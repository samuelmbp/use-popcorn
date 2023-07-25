export const Movie = ({ movie, onSelectMovie }) => {
  const { Poster: poster, Title: title, Year: year, imdbID } = movie;
  return (
    <li onClick={() => onSelectMovie(imdbID)}>
      <img src={poster} alt={`${title} poster`} />
      <h3>{title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{year}</span>
        </p>
      </div>
    </li>
  );
};
