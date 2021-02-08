import { gql } from '@apollo/client'

const getBooks = gql`
	query getBooksQuery {
		books {
			name
			id
		}
	}
`

export { getBooks }
