import React from 'react';
import OptionsForm from '../Options/OptionsForm';

const Hall = ({nextRoom, getOptions})=>
    <div>
        <h4>Выберите опции для коридора</h4>
        <OptionsForm getOptions={getOptions} componentName={"hall"}/>
        <button onClick={nextRoom}>Сохранить</button>
    </div>


export default Hall;  