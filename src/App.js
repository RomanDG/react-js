import React from 'react';

import {records} from 'constants/static/records';
import BlogPage from 'components/BlogPage';

import { Container } from 'semantic-ui-react'


const App = () => {
	console.log(records)
	return (
		<Container>
			<BlogPage records={records} />
		</Container>
	)
};

export default App;