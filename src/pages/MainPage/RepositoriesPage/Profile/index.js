import React from 'react';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

const Profile = () => (
  <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/11667697?v=4" />
      <Login>Marcelo</Login>
      <Name>Marcelo Kiilian</Name>
    </Header>
    <Inner>
      <Data>
        <MdGroup size={20} />
        30&nbsp;<i>seguidores</i>&nbsp; &middot; &nbsp;10&nbsp; <i>seguindo</i>
      </Data>
      <Data>
        <MdWork size={20} />
        Itaú Unibanco
      </Data>
      <Data>
        <MdLocationCity size={20} />
        São Paulo - CTO
      </Data>
      <Data>
        <MdLink size={20} />
        <a href="www.itau.com.br">Itaú Unibanco</a>
      </Data>
    </Inner>
  </Container>
);
export default Profile;