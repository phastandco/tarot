import React, { useState } from 'react';
import styled from 'styled-components';


const nombres = ['3 joueurs', '4 joueurs', '5 joueurs'];
let noms_joueurs  = [];

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

const ButtonGroup = styled.div`
  display: flex;
`;

function Form_joueurs (props) {
    let nom_joueurs = props.noms
    let form = <input type="text"  placeholder={props.noms.index} className="w-full"/>

    const [noms, setNoms] = useState(noms_joueurs)
    console.log("props : " + props.nombre)

    for (let i = 0; i < props.nombre; i++) {
        console.log("props 2 : " +  props.nombre)
        console.log("i : " + i)
        return (
            noms_joueurs.map(nom => (
                {form}
            ))
        )
    }
}

function Setup () {

    let n = 4;
    const [active, setActive] = useState(nombres[0]);
    const [checked, setChecked] = useState(false);

    const petite = () => {
        setChecked(!checked);
    };

    let update_nombre = function (nom) {
        switch (nom){
            case "3 joueurs":
                n = 3
                break;
            case "4 joueurs":
                n = 4
                break;
            case "5 joueurs":
                n = 5
                break;
            default :
                n = 4
        }
        return n;
    }

    let nombres_joueurs = nombres.map(nom => (
        <ButtonToggle
            key={nom}
            active={active === nom}
            onClick={() => {
                setActive(nom)
                n = update_nombre(nom)
                }
            }
        >
            {nom}
        </ButtonToggle>
    ))

    function affichage (n) {
        let form = <input type="text"  placeholder={n} className="w-full"/>
        for (let i = 0; i < n; i++) {

        }
    }
    return (
        <div className = "form-joueurs display-flex bg-slate-200">
            <div className = "flex justify-center">
                <ButtonGroup>
                {nombres_joueurs}
                </ButtonGroup>
             </div>
            <div className = "w-full justify-center" >
                <Form_joueurs noms = {noms_joueurs} />
            </div>
            <div className="petite">
                <label className="display-flex w-full">
                    Petite
                    <input
                        className="m-2"
                        type = "checkbox"
                        checked={checked}
                        onChange={petite}
                    />
                </label>
            </div>
            <button>OK</button>
        </div>
    );
}

export default Setup