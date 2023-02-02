import React from 'react';
import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import { IFormTyre } from '../../types/form';

interface Props {
  data: IFormTyre;
}

const TyreMail: React.FC<Props> = ({ data }) => {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';

  return (
    <Html>
      <Head />
      <Preview>Vous avez une nouvelle demande de rendez-vous</Preview>
      <Section style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/assets/DMA.png`}
            width='58'
            height='29'
            alt='DMA'
            style={logo}
          />
          <Text style={paragraph}>Voici les coordonnées du contact</Text>
          <Text style={paragraph}>{data.lastName}</Text>
          <Text>{data.email}</Text>
          {data.phone ? <Text>{data.phone}</Text> : null}
          {data.carBrand && data.carModel ? (
            <Text>{data.carBrand + ' ' + data.carModel}</Text>
          ) : null}
          {data.electric ? <Text>Electrique ou hybride : Oui</Text> : null}
          {data.tyreWidth ? (
            <Text style={paragraph}>Largeur : {data.tyreWidth}</Text>
          ) : null}
          {data.tyreHeight ? (
            <Text style={paragraph}>Hauteur : {data.tyreHeight}</Text>
          ) : null}
          {data.diameter ? (
            <Text style={paragraph}>Diamètre : {data.diameter}</Text>
          ) : null}
          {data.chargeIndicator ? (
            <Text style={paragraph}>
              Indicateur de charge : {data.chargeIndicator}
            </Text>
          ) : null}
          {data.speedIndicator ? (
            <Text style={paragraph}>
              Inddicateur de vitesse : {data.speedIndicator}
            </Text>
          ) : null}
          {data.quantity ? (
            <Text style={paragraph}>Quantité : {data.quantity}</Text>
          ) : null}

          <Hr style={hr} />
          <Text style={footer}>Rue des Hauteurs 28, 4600 Richelle</Text>
        </Container>
      </Section>
    </Html>
  );
};

const fontFamily =
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

const main = {
  backgroundColor: '#ffffff',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const logo = {
  margin: '0 auto',
};

const paragraph = {
  fontFamily,
  fontSize: '16px',
  lineHeight: '26px',
};

const btnContainer = {
  textAlign: 'center' as const,
};

const button = {
  fontFamily,
  backgroundColor: '#5F51E8',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  fontFamily,
  color: '#8898aa',
  fontSize: '12px',
};

export default TyreMail;
