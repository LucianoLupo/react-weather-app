
import React from 'react';

import { Container } from './day.styles';

const Day = ({data}) => {
    return (
        <Container>
            <p>dia {data}</p>
            <h3>sol</h3>
            <p>max min</p>
        </Container>
    )
}

export default Day;