import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import BookForm from './BookForm'
import AuthorForm from './AuthorForm'

const Forms = () => {
	return (
		<Row>
			<Col>
				<BookForm />
			</Col>
			<Col>
				<AuthorForm />
			</Col>
		</Row>
	)
}

export default Forms
