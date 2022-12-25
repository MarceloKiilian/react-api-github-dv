import React from 'react';

import { Container, Name, Description, Footer, Lang, Link } from './styles';

const Repository = () => (
  <>
    <Container>
      <Name>Repo Name</Name>
      <Description>Repo Description</Description>
      <Footer color="#f37272">
        <Lang> Repo Lang</Lang>
        <Link href="www.itau.com.br" target="_blank">
          Ver
        </Link>
      </Footer>
    </Container>
  </>
);

export default Repository;
