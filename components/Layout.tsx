import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

type Props = {
  title?: string;
};

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Rubik");
  width: 100%;
  max-width: 98rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 1.6rem;
  font-family: "Rubik", sans-serif;
`;
const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto:400,900");
  @import url("https://fonts.googleapis.com/css?family=Rubik");

  text-align: center;
  font-family: "Rubik", sans-serif;
`;

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title"
}) => (
  <Wrapper>
    <Container>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
          |{" "}
          <Link href="/about">
            <a>About</a>
          </Link>{" "}
          |{" "}
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>(Footer)</span>
      </footer>
    </Container>
  </Wrapper>
);

export default Layout;
