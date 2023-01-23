import { useQuery, gql } from "@apollo/client";

const TANKS = gql`
  query getTanks {
    storageTanks {
      data {
        attributes {
          name
          capacity
        }
      }
    }
  }
`;

const Tanks = () => {
    const {data, error, loading} = useQuery(TANKS)

    console.log('%c [qq]: data ', 'background: #fbff00; color: #000000; font-size: 1rem; padding: 0.2rem 0; margin: 0.5rem;', '\n', data, '\n\n');
  return <h1>Storage Tanks</h1>;
};

export default Tanks;
