import React from 'react'
import { Alert } from 'react-bootstrap';
const message = ({variet,children}) => {
    return <Alert variant={variet}>{children}</Alert>
}

message.defaultProps={
    variant:'info'
}

export default message
