let typeDefs = `

type Query {
  currentUser(id: ID!): User
}

type User {
  id: ID!
  username: String!
  email: String!
  firstName: String
  lastName: String
  opps: [Opp]
  dream: Dream
}

type Opp {
  id: ID!
  title: String
  description: String
}

type Dream {
  id: ID!
  userId: ID!
  roles: [Role]
  tools: [Tool]
  teams: [Team]
}

type Role {
  id: ID!
  dreamId: ID!
  title: String!
}

type Tool {
  id: ID!
  dreamId: ID!
  title: String!
}

type Team {
  id: ID!
  dreamId: ID!
  title: String
  url: String!
}

`;

export default typeDefs;