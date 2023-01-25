import Layout from "src/components/layout/Layout";
import "src/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap stylesheet

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  HttpLink,
} from "@apollo/client";

// apollo client for graphql
// const client = new ApolloClient({
//   uri: "http://localhost:1337/graphql", // needed to add graphql (I guess it's a strapi V4 thing)
//   cache: new InMemoryCache(),
// });

const httpLink = new HttpLink({ uri: "http://localhost:1337/graphql" });

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  // const token = localStorage.getItem('auth_token');

  // Use the setContext method to set the HTTP headers.
  // operation.setContext({
  //   headers: {
  //     authorization:
  //       // token ?
  //       `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc0MTk4MzAyLCJleHAiOjE2NzY3OTAzMDJ9.9T_nI23Uu1dSdZnni8bTfmHbD0tdnSGLzKjREUYp-GQ`,
  //     // : ''
  //   },
  // });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
