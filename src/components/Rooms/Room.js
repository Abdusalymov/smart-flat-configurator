import React from 'react';
import Options from '../Options';

const Room = ({ nextRoom, number, getOptions })=>
    <div>
        <h4>Выберите опции для комнаты({number})</h4>
        <Options  getOptions={getOptions} componentName={`room${number}`}/>
        <button onClick={nextRoom} >
            Сохранить
        </button>
    </div>


export default Room;  