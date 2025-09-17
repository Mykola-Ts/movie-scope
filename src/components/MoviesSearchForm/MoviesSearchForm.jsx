import PropTypes from 'prop-types';
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

export const MoviesSearchForm = ({ onSearch }) => {
  const onSearchMovie = evt => {
    evt.preventDefault();

    const searchQuery = evt.target.query.value.trim();

    if (!searchQuery) {
      toast.remove();
      toast('Input field is empty. Enter search query!', toastWarningOptions);

      return;
    }

    onSearch(searchQuery);

    evt.target.reset();

    return () => {
      toast.remove();
    };
  };

  const onReset = evt => {
    evt.target.closest('form').reset();
  };

  return (
    <SearchbarForm onSubmit={onSearchMovie}>
      <InputLabel>
        <SearchInput type="text" name="query" placeholder="Movie title" />
        <SearchIcon />
        <CloseIcon onClick={onReset} />
      </InputLabel>

      <SubmitBtn type="submit">Search</SubmitBtn>
    </SearchbarForm>
  );
};

MoviesSearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
