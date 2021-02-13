const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')
<<<<<<< HEAD
const path = require('path')
=======
>>>>>>> 4d00b9622ffc911dc8083efcd20563b19f57c2e5

// Load schema & resolvers
const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')

// Load db methods
const mongoDataMethods = require('./data/db')

// Connect to MongoDB
const connectDB = async () => {
	try {
		await mongoose.connect(
			'mongodb+srv://henrywebdev:1234@tutorialgraphql.et32c.mongodb.net/TutorialGraphQL?retryWrites=true&w=majority',
			{
				useCreateIndex: true,
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false
			}
		)

		console.log('MongoDB connected')
	} catch (error) {
		console.log(error.message)
		process.exit(1)
	}
}

connectDB()

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: () => ({ mongoDataMethods })
})

const app = express()
server.applyMiddleware({ app })

<<<<<<< HEAD
// Serve static assets if in production
if (process.env.NODE_ENV == 'production') {
	// Set static folder
	app.use(express.static(path.join(__dirname, '../client/build')))

	// Any request that is not /api/items should load index.html
	app.get('*', (req, res) =>
		res.sendFile(path.join(__dirname, '../client/build/index.html'))
	)
}

app.listen({ port: process.env.PORT || 4000 }, () =>
=======
app.listen({ port: 4000 }, () =>
>>>>>>> 4d00b9622ffc911dc8083efcd20563b19f57c2e5
	console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
)
