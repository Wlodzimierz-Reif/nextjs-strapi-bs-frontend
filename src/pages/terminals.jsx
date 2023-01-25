import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { useQuery, gql } from "@apollo/client";
import axios from "axios";
import Card from "src/components/Card";

// const TERMINALS = gql`
//   query getTerminals {
//     terminals {
//       data {
//         id
//         attributes {
//           name
//           largeStorageTank {
//             total
//             available
//             capacity
//           }
//         }
//       }
//     }
//   }
// `;

export default function terminals() {
  // const { data, error, loading } = useQuery(TERMINALS);
  const [terminals, setTerminals] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.post(
        "http://localhost:3000/api/strapiProxy",
        {
          method: "get",
          url: "http://localhost:1337/api/terminals?populate=*",
        },
      );
      setTerminals(data);
      console.log("data: ", data);
    };
    getData();
  }, []);
  // ***********************
  // if (loading) return <p>Loading...</p>;
  // if (error) {
  //   console.log(error);
  //   return <p>Error...</p>;
  // }

  // <h1>TERMINALS</h1>
  // {data.terminals.data.map((terminal) => {
  //   return (
  //     <div>
  //       <h2>{terminal.attributes.name}</h2>
  //       <h3>Large tanks:</h3>
  //       <p>
  //         {terminal.attributes.largeStorageTank[0]?.available} /{" "}
  //         {terminal.attributes.largeStorageTank[0]?.total}
  //       </p>
  //       {/* <p>Small tanks: {terminal.attributes.small_available}/{terminal.attributes.total_small_tanks}</p> */}
  //     </div>
  //   );
  // })}
  // return <Container></Container>;
  // ***********************

  return (
    <Container>
      <h1>Terminals</h1>
      {terminals.map((terminal) => (
        // <div key={terminal.id}>
        //   <h2>{terminal.attributes.name}</h2>
        //   <h3>Large tanks:</h3>
        //   <p>
        //     {terminal.attributes.largeStorageTank[0]?.available} /{" "}
        //     {terminal.attributes.largeStorageTank[0]?.total}
        //   </p>
        //   {/* <p>Small tanks: {terminal.attributes.small_available}/{terminal.attributes.total_small_tanks}</p> */}
        // </div>
        <Card {...terminal}></Card>
      ))}
    </Container>
  );
}
