import React from 'react'
import Card from 'react-bootstrap/Card'

const BookDetails = () => {
	return (
		<Card bg='info' text='white' className='shadow'>
			<Card.Body>
				<Card.Title>Ky nghe lay Tay</Card.Title>
				<Card.Subtitle>Phong su</Card.Subtitle>
				<Card.Text>
					<p>Vu Trong Phung</p>
					<p>Age: 90</p>
					<p>All books by this author</p>
					<ul>
						<li>Ky nghe lay Tay</li>
						<li>So do</li>
					</ul>
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default BookDetails
