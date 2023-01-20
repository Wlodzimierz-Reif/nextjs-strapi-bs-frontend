import Link from "next/link";
// import { useEffect } from "react";
// import { useRouter } from "next/router";
import { Container } from "react-bootstrap";

const NotFound = () => {
  // const router = useRouter();
  // useEffect(() => {
  //   setTimeout(() => {
  //     // redirects user to the homepage
  //     router.push("/")
  //   }, 3000);
  // }, []);
  return (
    <Container>
      <div className="not-found">
        <h1>Oooops...</h1>
        <h2>That page cannot be found</h2>
        {/* <p>
          Go back to the <Link href="/">Homepage</Link>
        </p> */}
      </div>
    </Container>
  );
};

export default NotFound;
