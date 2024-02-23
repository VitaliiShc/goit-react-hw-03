import { useId } from 'react';

import css from './SearchBox.module.css';

const SearchBox = ({ onChange }) => {
  const filterFieldId = useId();

  return (
    <div className={css.searhbox}>
      <label htmlFor={filterFieldId}>Find contacts by name</label>
      <input
        id={filterFieldId} 
        type="text"
        onChange={onChange}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;
