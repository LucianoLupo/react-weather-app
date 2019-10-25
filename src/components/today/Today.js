import React from 'react'

import {
    Container,
    Header,
    Temperature,
    Data,
    Info,

} from './today.styles';

const Today = () => {
    return (
        <Container>
            <Header>
                <h1>Temperley Buenos Aires</h1>
                <h3>viernes</h3>
                <h3>Soleado</h3>
            </Header>
            <Info>
                <Temperature>
                    <h1> sol </h1>
                    <h1>29º</h1>
                    <p>c | f</p>
                </Temperature>
                <Data>
                    <h3>Presipitaciones</h3>
                    <h3>Humedad</h3>
                    <h3>Viento</h3>
                </Data>
            </Info>

        </Container>
    )
}

export default Today;