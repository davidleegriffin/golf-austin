import { ApolloClient } from 'apollo-boost';

const {
  REACT_APP_STEPZEN_API_KEY,
  REACT_APP_STEPZEN_ENDPOINT
} = process.env

export const client = new ApolloClient({
  headers: {
    Authorization: `Apikey headyflamingomouth::stepzen.net+1000::d603591e9b22ec93bbf3f204f018c484d285b3e4a26cb956a442d3a249d45414`,
  },
  uri: "https://HeadyFlamingoMouth.stepzen.net/api/winning-stoat/__graphql",
})