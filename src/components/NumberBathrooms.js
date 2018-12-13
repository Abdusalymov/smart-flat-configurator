import React from 'react';

const NumberBathrooms = ({onChange})=>
    <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Укажите количестов санузлов</label>
        <select
            className="form-control" 
            id="exampleFormControlSelect1" 
            roomsCount="toilet_count" 
            onChange={onChange}
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

export default NumberBathrooms; 