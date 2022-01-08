import React, { useState } from "react";
import Input from "./Input";

function Setup() {
  const [inputValues, setinputValues] = useState({
    player1: "",
    player2: "",
    player3: "",
    player4: "",
    player5: "",
  });

  const nombres = ["3 joueurs", "4 joueurs", "5 joueurs"];

  const [active, setActive] = useState(4);
  const [checked, setChecked] = useState(false);

  const buttonsList = () =>
    nombres.map((nom, index) => (
      <button
        className="p-5 bg-blue-300 mr-3 text-black rounded-lg shadow-lg hover:bg-blue-400 text-lg"
        key={index}
        onClick={() => {
          setActive(index + 3);
        }}
      >
        {nom}
      </button>
    ));

  const displayInputList = () => {
    const listInputs = [];
    for (let i = 0; i < active; i++) {
      const name = `player${i + 1}`;
      listInputs.push(
        <Input
          key={i}
          name={name}
          placeholder={name}
          value={inputValues.name}
          onChange={handleInputs}
        />
      );
    }

    return listInputs;
  };

  const display = (inputValues) => {
    console.log("input : " + inputValues.player1);

    inputValues.map(
      (nom, index) => <h6 key={index}>Joueur {nom}</h6>
      // for (let i = 0; i < inputValues.lengt(); i++) {
      //   inputValues.name;
      // }
    );
  };

  const handleInputs = (e) => {
    setinputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col bg-slate-200 p-10 rounded-lg">
      <div className="flex justify-center">{buttonsList()}</div>
      <div className="w-full justify-center"></div>
      <div className="w-full">{displayInputList()}</div>
      <div className="flex mt-2 mb-5 flex-row w-full justify-center items-center">
        <div className="flex items-center">
          <label className="form-check-label text-sm mr-2 inline-block text-gray-400">
            Petite
          </label>
          <input
            onChange={() => setChecked(!checked)}
            className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value={checked}
          />
        </div>
      </div>
      <button
        className="w-full bg-blue-400 hover:bg-blue-500 py-2 px-5 rounded-lg text-lg text-black shadow-lg"
        onClick={() => display(inputValues)}
      >
        Ok
      </button>
    </div>
  );
}

export default Setup;
