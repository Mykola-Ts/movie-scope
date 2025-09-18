import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { toastWarningOptions } from 'helpers/helpers';
import {
  SearchIcon,
  InputLabel,
  SearchInput,
  SearchbarForm,
  SubmitBtn,
  CloseIcon,
} from './MoviesSearchForm.styled';

export const MoviesSearchForm = ({
  onSearch,
  onReset,
  paramsQuery,
  clearInput,
  setClearInput,
}) => {
  const [inputQuery, setInputQuery] = useState(paramsQuery ?? '');

  useEffect(() => {
    setInputQuery(paramsQuery ?? '');
  }, [paramsQuery]);

  useEffect(() => {
    if (clearInput) {
      setInputQuery('');
      setClearInput(false);
    }
  }, [clearInput, setClearInput]);

  const onSearchMovie = evt => {
    evt.preventDefault();

    const searchQuery = evt.target.query.value.trim();

    if (!searchQuery) {
      toast.remove();
      toast('Input field is empty. Enter search query!', toastWarningOptions);

      return;
    }

    onSearch(searchQuery);

    return () => {
      toast.remove();
    };
  };

  return (
    <SearchbarForm onSubmit={onSearchMovie}>
      <InputLabel>
        <SearchInput
          type="text"
          name="query"
          value={inputQuery}
          placeholder="Movie title"
          onInput={evt => setInputQuery(evt.target.value)}
        />
        <SearchIcon />
        {inputQuery && <CloseIcon onClick={onReset} />}
      </InputLabel>

      <SubmitBtn type="submit">Search</SubmitBtn>
    </SearchbarForm>
  );
};

MoviesSearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  paramsQuery: PropTypes.string,
  clearInput: PropTypes.bool.isRequired,
  setClearInput: PropTypes.func.isRequired,
};
