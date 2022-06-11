import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="commandez en ligne pour la livraison sans contact"
        backgroundImg="model-s.jpg"
        leftBtnText="Commande personnalisée"
        rightBtnText="Inventaire existant"
        />
        <Section
        title="Model Y"
        description="commandez en ligne pour la livraison sans contact"
        backgroundImg="model-y.jpg"
        leftBtnText="Commande personnalisée"
        rightBtnText="Inventaire existant"
        />
        <Section
        title="Model 3"
        description="commandez en ligne pour la livraison sans contact"
        backgroundImg="model-3.jpg"
        leftBtnText="Commande personnalisée"
        rightBtnText="Inventaire existant"
        />
        <Section
        title="Model X"
        description="commandez en ligne pour la livraison sans contact"
        backgroundImg="model-x.jpg"
        leftBtnText="Commande personnalisée"
        rightBtnText="Inventaire existant"
        />
        <Section
        title="Lowest cost solar panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Commandez maintenant"
        rightBtnText="Apprendre Davantage"
        />
        <Section
        title="Solar for New Roffs"
        description="Solar Roffs costs less than a New Roffs"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Commandez maintenant"
        rightBtnText="Apprendre Davantage"
        />
        <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Achetez maintenant"
        />
    </Container>
    );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  z-index: 10;
`;
