import React from 'react';
import OptionsForm from '../Options/OptionsForm';

const Kitchen = ({nextRoom, getOptions})=>
    <div>
        <h4>Выберите опции для кухни</h4>
        <OptionsForm 
            getOptions={getOptions} 
            componentName={"Kitchen"}
            isDisplayExtraOption = {true}
        />
        <button onClick={nextRoom}>Сохранить</button>
    </div>


export default Kitchen;  