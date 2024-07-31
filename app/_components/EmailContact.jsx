import * as React from 'react'

export const EmailContact = ({
  body
}) => (
  <div>
    <h1>Message from: {body.name}!</h1>
    <p>email: {body.email}</p>
    <p>{body.message}</p>
  </div>
)
