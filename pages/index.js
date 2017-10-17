import { gql, graphql } from 'react-apollo'
import withData from '../lib/withData'

const query = gql`
  {
    allPosts {
      id
    }
  }
`

const index = ({ data: { allPosts } }) => (
  <div>
    Welcome to next.js!
    <ul>{allPosts.map(u => <li key={u.id}>{u.id}</li>)}</ul>
  </div>
)

const GraphqlIndex = graphql(query)(index)

export default withData(GraphqlIndex)
