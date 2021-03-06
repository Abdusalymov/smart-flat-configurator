import React from 'react';

const NumberWaterInlets = ({onChange})=>
    <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Укажите количестов вводов воды</label>
        <select 
            className="form-control" 
            id="exampleFormControlSelect1" 
            onChange={(e)=>onChange(e, 'water_count')}
            >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
        </select>
    </div>

export default NumberWaterInlets;