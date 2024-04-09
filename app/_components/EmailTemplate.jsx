import * as React from 'react'

export const EmailTemplate = ({
  body
}) => (
  <div>
    <h1>Welcome, {body.fullName}!</h1>
  </div>
)
