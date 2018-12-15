import React from 'react';
import OptionsForm from '../Options/OptionsForm';

const Toilet = ({nextRoom, number, getOptions})=>
    <div>
        <h4>Выберите опции для санузла({number})</h4>
        <OptionsForm 
            getOptions={getOptions} 
            componentName={`toilet${number}`}
            isDisplayExtraOption = {true}
        />
        <button onClick={nextRoom}>Сохранить</button>
    </div>


export default Toilet;  