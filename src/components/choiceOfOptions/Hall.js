import React from 'react';
import Options from '../choiceOfOptions/Options';

const Hall = ({nextRoom, getOptions})=>
    <div>
        <h4>Выберите опции для коридора</h4>
        <Options getOptions={getOptions} componentName={'hall'}/>
        <button onClick={nextRoom}>
            Сохранить
        </button>
    </div>


export default Hall;  