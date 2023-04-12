import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setQuery } from '../../features/filter/filterSlice';

export const Header = () => {
  const query = useAppSelector(state => state.filterState.query);
  const dispatch = useAppDispatch();

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
      </div>
      <input
          type="text"
          value={query}
          className="form-control"
          aria-label="Search"
          aria-describedby="inputGroup-sizing-default"
          onChange={e => dispatch(setQuery(e.target.value))}
        />
    </div>
  );
};
