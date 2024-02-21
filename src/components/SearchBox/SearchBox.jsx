import { useId } from 'react';

import css from './SearchBox.module.css';

const SearchBox = ({ onChange }) => {
  const searchLine = useId();

  return (
    <div className={css.searhbox}>
      <label htmlFor={searchLine}>Find contacts by name</label>
      <input
        id={searchLine}
        type="text"
        onChange={onChange}
        className={css.inputLine}
      />
    </div>
  );
};

export default SearchBox;
