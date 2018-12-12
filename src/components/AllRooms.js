import React, { Component } from 'react';
import NumberRooms from './NumberRooms'
import NumberBathrooms from './NumberBathrooms'
import NumberWaterInlets from './NumberWaterInlets'
import Kitchen from './choiceOfOptions/Kitchen'
import Hall from './choiceOfOptions/Hall'
import Toilet from './choiceOfOptions/Toilet'
import Room from './choiceOfOptions/Room'

const createArray = (N) => Array.from({length: N}, (v, k) => k+1);
const options = {
    control_temp: 0,
    management_light: 0,
    management_socket: 0,
    management_curtain: 0,
    control_multi: 0,
    control_air: 0,
    management_water: 0,
    control_water: 0,
}

class AllRooms extends Component {

    constructor(props){
        super(props);

        this.state = {
            counter: 0,
            allroomsIs: true,
            data:[
                {   room_count: 1,
                    toilet_count: 1,
                    water_count: 1,
                }
            ]
        }
        this.setQuantityRooms = this.setQuantityRooms.bind(this); 
        this.getOptions = this.getOptions.bind(this); 
        this.nextForm = this.nextForm.bind(this); 
        this.sendData = this.sendData.bind(this); 
    }

    sendData(){
        this.setState({allroomsIs: null})

        var data = new FormData();
        data.append( "json", JSON.stringify( this.state ) );

        fetch("https://pro100.media/api/calc/frame/",
        {
            method: "POST",
            body: data
        })
        .then( res => res.json() )
        .then( res =>  this.setState({response: res.body}) )
    }

    // checkInfoRoom(e, roomName){
    //     if(this.state.hasOwnProperty(roomName)){
    //         // const info_room = {...this.state[roomName]};
    //         let data = [...this.state.data];
    //         data[0][e.target.name] = 1;
    //         this.setState({ data });
    //         // this.setState({ [roomName]: info_room });
    //     }else{
    //         options[e.target.name] = 1;
    //         this.setState({ [roomName]: options })
    //     }
    // }
    checkInfoRoom(e, roomName){
        if(this.state.data[0].hasOwnProperty(roomName)){

            let data = [...this.state.data];
            data[0][roomName][e.target.name] = 1;
            this.setState({ data });

        }else{
            
            options[e.target.name] = 1;
            this.setState({ [roomName]: options })
        }
    }
    
    getOptions(e, roomName){

        if (e.target.checked) {
            this.checkInfoRoom(e, roomName);
           
        } else {
            const info_room = {...this.state[roomName]};
            info_room[e.target.name] = 0;
            this.setState({ [roomName]: info_room });
        }
        //   console.log(this.state)
    }

    setQuantityRooms(e) {
        let data = [...this.state.data];
        data[0][e.target.name] = e.target.value;
        this.setState({ data });
    }

    nextForm(){
        let counter = this.state.counter;
        counter++;
        this.setState({counter});
    }

    render() {

        const {room_count, toilet_count} = this.state;

        const entryNumbers = (
            <form onSubmit={this.handlSubmit}>
                <NumberRooms
                    onChange={this.setQuantityRooms}
                />
                <NumberBathrooms
                    onChange={this.setQuantityRooms}
                />
                <NumberWaterInlets
                    onChange={this.setQuantityRooms}
                />
                <button onClick={this.nextForm}>
                    Сохранить
                </button>
            </form>
        );

        const toilets = createArray(toilet_count).map((item)=>{
            return <Toilet
            key={item} 
            nextRoom = {this.nextForm}
            getOptions={this.getOptions}
            number={item} />
        });

        let rooms = createArray(room_count).map((item, index, array)=>{
            if(array[array.length-1] === item) {
                return <Room
                key={item} 
                nextRoom = {this.sendData}
                getOptions={this.getOptions}
                number={item} />
            }
            return <Room
            key={item} 
            nextRoom = {this.nextForm}
            getOptions={this.getOptions}
            number={item} />
        });

        const hall = (<Hall getOptions={this.getOptions} nextRoom={this.nextForm} />);
        const kitchen = (<Kitchen getOptions={this.getOptions} nextRoom={this.nextForm}/>);
        const allRooms = [entryNumbers, kitchen, hall,...toilets,...rooms];

        return (
            <div className="wrapper">
                <div className="main">

                { this.state.allroomsIs && allRooms[this.state.counter] }

                {  
                    this.state.response && 
                    <div dangerouslySetInnerHTML={{ __html: this.state.response }} /> 
                }
                   
                </div>
            </div>
            
        )
    }  
  
}

export default AllRooms;