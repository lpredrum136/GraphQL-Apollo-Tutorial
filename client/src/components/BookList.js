import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BookDetails from './BookDetails'

import { useQuery } from '@apollo/client'
import { getBooks } from '../graphql-client/queries'

const BookList = () => {
	const [bookSelected, setBookSelected] = useState(null)

	const { loading, error, data } = useQuery(getBooks)

	if (loading) return <p>Loading books....</p>
	if (error) return <p>Error loading books!</p>

	return (
		<Row>
			<Col xs={8}>
				<CardColumns>
					{data.books.map(book => (
						<Card
							border='info'
							text='info'
							className='text-center shadow'
							key={book.id}
							onClick={setBookSelected.bind(this, book.id)}
							style={{ cursor: 'pointer' }}
						>
							<Card.Body>{book.name}</Card.Body>
						</Card>
					))}
				</CardColumns>
			</Col>
			<Col>
				<BookDetails bookId={bookSelected} />
			</Col>
		</Row>
	)
}

export default BookList
