const { books, authors } = require('../data/static')

const resolvers = {
	// QUERY
	Query: {
		books: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.getAllBooks(),
		book: async (parent, { id }, { mongoDataMethods }) =>
			await mongoDataMethods.getBookById(id),

		authors: () => authors,
		author: (parent, args) => authors.find(author => author.id == args.id)
	},

	Book: {
		author: (parent, args) =>
			authors.find(author => author.id == parent.authorId)
	},

	Author: {
		books: (parent, args) => books.filter(book => book.authorId == parent.id)
	},

	// MUTATION
	Mutation: {
		createAuthor: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.createAuthor(args),
		createBook: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.createBook(args)
	}
}

module.exports = resolvers
