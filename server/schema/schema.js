const { gql } = require('apollo-server-express')

const typeDefs = gql`
	type Book {
		id: ID
		name: String
		genre: String
	}
`

module.exports = typeDefs
