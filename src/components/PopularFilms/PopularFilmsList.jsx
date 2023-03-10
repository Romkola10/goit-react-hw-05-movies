import { Link } from 'react-router-dom';

const PopularMoviesList = ({ popFilms, state }) => {
  return (
    <ul>
      {popFilms.map(({ id, title, name }) => (
        <li key={id}>
          <Link
            to={`movies/${id}`}
            state={state}
            style={{
              color: '#272727',
            }}
          >
            {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PopularMoviesList;