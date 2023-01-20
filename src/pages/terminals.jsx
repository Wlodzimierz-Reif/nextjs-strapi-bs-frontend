import React from "react";
import { Container } from "react-bootstrap";

import { useQuery, gql } from "@apollo/client";

const TERMINALS = gql`
  query getTerminals {
    terminals {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

export default function terminals() {
  const { data, error, loading } = useQuery(TERMINALS);
  console.log('%c [qq]: data ', 'background: #fbff00; color: #000000; font-size: 1rem; padding: 0.2rem 0; margin: 0.5rem;', '\n', data, '\n\n');
  console.log('%c [qq]: error ', 'background: #ff0000; color: #000000; font-size: 1rem; padding: 0.2rem 0; margin: 0.5rem;', '\n', error, '\n\n');
  console.log('%c [qq]: loading ', 'background: #001eff; color: #000000; font-size: 1rem; padding: 0.2rem 0; margin: 0.5rem;', '\n', loading, '\n\n');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <Container>
      <h1>terminals</h1>
      {data.terminals.data.map((terminal) => (
        <div>
          <h3>{terminal.attributes.name}</h3>
          <p>{terminal.attributes.total_large_tanks}</p>
          <p>{terminal.attributes.large_available}</p>
          <p>{terminal.attributes.total_small_tanks}</p>
          <p>{terminal.attributes.small_available}</p>
        </div>
      ))}
    </Container>
  );
}
