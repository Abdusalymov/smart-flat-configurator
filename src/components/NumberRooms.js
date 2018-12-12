import React from 'react';

const NumberRooms = ({onChange})=>
    <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Укажите количестов комнат</label>
        <select 
            className="form-control" 
            id="exampleFormControlSelect1"
            name="room_count"
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

export default NumberRooms;    