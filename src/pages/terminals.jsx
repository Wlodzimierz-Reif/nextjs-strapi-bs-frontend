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
          largeStorageTank {
            total
            available
            capacity
          }
        }
      }
    }
  }
`;

export default function terminals() {
  const { data, error, loading } = useQuery(TERMINALS);
  console.log(
    "%c [qq]: data ",
    "background: #fbff00; color: #000000; font-size: 1rem; padding: 0.2rem 0; margin: 0.5rem;",
    "\n",
    data,
    "\n\n",
  );
  console.log(
    "%c [qq]: error ",
    "background: #ff0000; color: #000000; font-size: 1rem; padding: 0.2rem 0; margin: 0.5rem;",
    "\n",
    error,
    "\n\n",
  );
  console.log(
    "%c [qq]: loading ",
    "background: #001eff; color: #000000; font-size: 1rem; padding: 0.2rem 0; margin: 0.5rem;",
    "\n",
    loading,
    "\n\n",
  );

  console.log(
    "%c [qq]: terminal.attributes.largeStorageTank[0] ",
    "background: #fbff00; color: #000000; font-size: 1rem; padding: 0.2rem 0; margin: 0.5rem;",
    "\n",
    data?.terminals.data[1].attributes.largeStorageTank[0].available,
    "\n\n",
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <Container>
      <h1>TERMINALS</h1>
      {data.terminals.data.map((terminal) => {
        return (
          <div>
            <h2>{terminal.attributes.name}</h2>
            <h3>Large tanks:</h3>
            <p>
              {terminal.attributes.largeStorageTank[0]?.available} /{" "}
              {terminal.attributes.largeStorageTank[0]?.total}
            </p>
            {/* <p>Small tanks: {terminal.attributes.small_available}/{terminal.attributes.total_small_tanks}</p> */}
          </div>
        );
      })}
    </Container>
  );
}
