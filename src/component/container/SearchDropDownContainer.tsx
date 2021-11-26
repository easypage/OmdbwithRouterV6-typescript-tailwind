import { useSelector } from 'react-redux';
import { RootState } from '../../module/redux/reducer/rootReducer';

import SearchDropDown from '../SearchDropDown';

function SearchDropDownContainer() {
  const movie = useSelector((state: RootState) => state.movie.data.movie);
  const loading = useSelector((state: RootState) => state.movie.loading);
  const error = useSelector((state: RootState) => state.movie.error);

  return <SearchDropDown movieData={movie} error={error} loading={loading} />;
}

export default SearchDropDownContainer;
