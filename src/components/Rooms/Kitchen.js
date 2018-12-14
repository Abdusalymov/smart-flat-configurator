import React from 'react';
import Options from '../Options';

const Kitchen = ({nextRoom, getOptions})=>
    <div>
        <h4>Выберите опции для кухни</h4>
        <Options getOptions={getOptions} 
        componentName={"Kitchen"}
        isDisplayExtraOption = {true}
        />
        <button onClick={nextRoom}>
            Сохранить
        </button>
    </div>


export default Kitchen;  