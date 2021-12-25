import React, { useState } from 'react';
import styled from 'styled-components';


const nombres = ['3 joueurs', '4 joueurs', '5 joueurs'];
const noms_joueurs  = [];
const n = "joueur 4";

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 30px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
`;

const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;

function Nombre_joueurs() {
    let n = 3
    let num_joueurs = "joueur " + n

    const [active, setActive] = useState(nombres[0]);
    const [noms, setNoms] = useState(noms_joueurs)

    console.log("active " + active)
    console.log("set active " + setActive + " n " + n)

    let nombres_joueurs = nombres.map(nom => (
        <ButtonToggle
            key={nom}
            active={active === nom}
            onClick={() => setActive(nom)}
        >
            {nom}
        </ButtonToggle>
    ))

    let forms_joueurs = nombres.map(nom => (
        <input type = "text" class = "w-full"/>
    ))

    switch (active) {
        case "3 joueurs" :
            n = 3
            break;
        case "4 joueurs" :
            n = 4
            break;
        case "5 joueurs" :
            n = 5
            break;
        default : setActive(3);
    }

    return (
        <div className = "form-joueurs">
            <div className = "nombres-joueurs">
                {nombres_joueurs}
             </div>
            <div className = "noms_joueurs">
                {forms_joueurs}
            </div>


        </div>
    );
}

export default Nombre_joueurs