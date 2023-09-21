import PropTypes from 'prop-types';
import {
  SearchIcon,
  InputLabel,
  SearchInput,
  SearchbarForm,
  SubmitBtn,
  CloseIcon,
} from './MoviesSearchForm.styled';

export const MoviesSearchForm = ({ onSearch, onReset }) => {
  return (
    <SearchbarForm onSubmit={evt => onSearch(evt)}>
      <InputLabel>
        <SearchInput type="text" name="query" placeholder="Movie title" />
        <SearchIcon />
        <CloseIcon onClick={evt => onReset(evt)} />
      </InputLabel>

      <SubmitBtn type="submit">Search</SubmitBtn>
    </SearchbarForm>
  );
};

MoviesSearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};
