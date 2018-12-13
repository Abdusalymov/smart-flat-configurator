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
            flatInfo:{  
                room_count: 1,
                toilet_count: 1,
                water_count: 1,
            }
            
        }
        this.setRoomsCount = this.setRoomsCount.bind(this); 
        this.getFormOptions = this.getFormOptions.bind(this); 
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

    // checkRoomInStorage(e, typeOfRoom){
    //     if(this.state.hasOwnProperty(typeOfRoom)){
    //         // const info_room = {...this.state[typeOfRoom]};
    //         let data = [...this.state.data];
    //         data[0][e.target.name] = 1;
    //         this.setState({ data });
    //         // this.setState({ [typeOfRoom]: info_room });
    //     }else{
    //         options[e.target.name] = 1;
    //         this.setState({ [typeOfRoom]: options })
    //     }
    // }
    checkRoomInStorage(e, typeOfRoom){

        const { flatInfo } = this.state;
        
        if(flatInfo.hasOwnProperty(typeOfRoom)){

            // let flatInfo = [...this.state.flatInfo];
            // flatInfo[0][typeOfRoom][e.target.name] = 1;
            this.setState({ 
                ...this.state.flatInfo, 
                [e.target.name]: e.target.value 
            });

        }else{
            
            options[e.target.name] = 1;
            this.setState({ [typeOfRoom]: options })
        }
    }
    
    getFormOptions(e, typeOfRoom){

        if (e.target.checked) {
            this.checkRoomInStorage(e, typeOfRoom);
           
        } else {
            const info_room = {...this.state[typeOfRoom]};
            info_room[e.target.name] = 0;
            this.setState({ [typeOfRoom]: info_room });
        }
        //   console.log(this.state)
    }

    setRoomsCount(e) {
        this.setState({ 

            flatInfo: {
                ...this.state.flatInfo, 
                [e.target.roomsCount]: e.target.value
            } 
        });
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
                    onChange={this.setRoomsCount}
                />
                <NumberBathrooms
                    onChange={this.setRoomsCount}
                />
                <NumberWaterInlets
                    onChange={this.setRoomsCount}
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
            getOptions={this.getFormOptions}
            number={item} />
        });

        let rooms = createArray(room_count).map((item, index, array)=>{
            if(array[array.length-1] === item) {
                return <Room
                key={item} 
                nextRoom = {this.sendData}
                getOptions={this.getFormOptions}
                number={item} />
            }
            return <Room
            key={item} 
            nextRoom = {this.nextForm}
            getOptions={this.getFormOptions}
            number={item} />
        });

        const hall = (<Hall getOptions={this.getFormOptions} nextRoom={this.nextForm} />);
        const kitchen = (<Kitchen getOptions={this.getFormOptions} nextRoom={this.nextForm}/>);
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