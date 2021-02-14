import Container from 'react-bootstrap/Container'
import BookList from './components/BookList'
import Forms from './components/Forms'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
	uri: 'https://limitless-earth-31519.herokuapp.com/graphql',
	cache: new InMemoryCache()
})

function App() {
	return (
		<ApolloProvider client={client}>
			<Container className='py-3 mt-3' style={{ backgroundColor: 'lightcyan' }}>
				<h1 className='text-center text-info mb-3'>My Books</h1>
				<hr />
				<Forms />
				<hr />
				<BookList />
			</Container>
		</ApolloProvider>
	)
}

export default App
