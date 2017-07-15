import React, {PropTypes} from 'react';
import { Input } from 'semantic-ui-react';

const Search = ({goSearch}) => (
  <Input onChange={goSearch} fluid icon='search' placeholder='Search...' />
);

Search.propTypes = {
  goSearch: PropTypes.func
};

export default Search;