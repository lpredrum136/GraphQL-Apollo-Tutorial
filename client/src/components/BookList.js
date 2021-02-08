import React from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BookDetails from './BookDetails'

const BookList = () => {
	return (
		<Row>
			<Col xs={8}>
				<CardColumns>
					<Card border='info' text='info' className='text-center shadow'>
						<Card.Body>Ky nghe lay tay</Card.Body>
					</Card>
					<Card border='info' text='info' className='text-center shadow'>
						<Card.Body>Ky nghe lay tay</Card.Body>
					</Card>
					<Card border='info' text='info' className='text-center shadow'>
						<Card.Body>Ky nghe lay tay</Card.Body>
					</Card>
					<Card border='info' text='info' className='text-center shadow'>
						<Card.Body>Ky nghe lay tay</Card.Body>
					</Card>
					<Card border='info' text='info' className='text-center shadow'>
						<Card.Body>Ky nghe lay tay</Card.Body>
					</Card>
					<Card border='info' text='info' className='text-center shadow'>
						<Card.Body>Ky nghe lay tay</Card.Body>
					</Card>
				</CardColumns>
			</Col>
			<Col>
				<BookDetails />
			</Col>
		</Row>
	)
}

export default BookList
