import React from 'react'

import {
    Container,

} from './days-list.styles';

import Day from '../day/Day';
const list = ["hoy",1,2,3,4,5]

const DaysList = () => {
    return (
        <Container>
            {
                list.map((day) => {
                    return (
                        <Day data={day}/>
                    )
                })
            }
        </Container>
    )
}

export default DaysList;