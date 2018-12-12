import React from 'react';
import Options from '../choiceOfOptions/Options';

const Toilet = ({nextRoom, number, getOptions})=>
    <div>
        <h4>Выберите опции для санузла({number})</h4>
        <Options getOptions={getOptions} componentName={`toilet${number}`}/>
        <button onClick={nextRoom}>
            Сохранить
        </button>
    </div>


export default Toilet;  