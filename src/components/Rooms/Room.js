import React from 'react';
import OptionsForm from '../Options/OptionsForm';
const Room = ({ nextRoom, number, getOptions })=>
    <div>
        <h4>Выберите опции для комнаты({number})</h4>
        <OptionsForm  getOptions={getOptions} componentName={`room${number}`}/>
        <button onClick={nextRoom} >Сохранить</button>
    </div>


export default Room;  