import { StyledButton, StyledForm, StyledInput } from './SearchBar.styled';
import { MdSavedSearch } from 'react-icons/md';

const SearchBar = ({ onSubmit }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledInput
        type="text"
        name="filmInput"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
      />
      <StyledButton type="submit">
        <MdSavedSearch size={20} />
        Search
      </StyledButton>
    </StyledForm>
  );
};

export default SearchBar;