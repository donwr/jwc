export const createCustomerMutation = `
mutation customerCreate($input: CustomerCreateInput!) {
  customerCreate(input: $input) {
    customerUserErrors {
      code
      field
      message
    }
    customer {
      id
      email
      firstName
      lastName
    }
  }
}

`

export const deleteCustomerMutation = `

mutation customerDelete($customerId: ID!) {
  customerDelete(id: $customerId) {
    deletedCustomerId
    userErrors {
      field
      message
    }
  }
}
`

export const updateCustomerMutation = `
mutation customerUpdate($customerAccessToken: String!, $customer: CustomerUpdateInput!) {
  customerUpdate(customerAccessToken: $customerAccessToken, customer: $customer) {
    customer {
      id
      email
      firstName
      lastName
    }
    customerUserErrors {
      code
      field
      message
    }
  }
}

`

export const verifyCustomerMutation = `
mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
  customerAccessTokenCreate(input: $input) {
    customerAccessToken {
      accessToken
      expiresAt
    }
    userErrors {
      field
      message
    }
  }
}
`
