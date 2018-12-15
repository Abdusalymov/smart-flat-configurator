import React, { Component } from 'react';
import NumberRooms from './NumberRooms'
import NumberBathrooms from './NumberBathrooms'
import NumberWaterInlets from './NumberWaterInlets'
import Kitchen from './Rooms/Kitchen'
import Hall from './Rooms/Hall'
import Toilet from './Rooms/Toilet'
import Room from './Rooms/Room'
import Wrapper from './Style/Wrapper'
import RoomOptions from './Options/RoomOptions'



const createArray = (N) => Array.from({length: N}, (v, k) => k+1);

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            counter: 0,
            isDisplayLastForm: true,
            flatInfo:{  
                room_count: 1,
                toilet_count: 1,
                water_count: 1,
            }
        }
        this.setRoomsCount = this.setRoomsCount.bind(this); 
        this.getFormOptions = this.getFormOptions.bind(this); 
        this.nextForm = this.nextForm.bind(this); 
        this.handlerAPI = this.handlerAPI.bind(this); 
    }

    handlerAPI(){
        this.setState({isDisplayLastForm: null});
        
        var data = new FormData();
        data.append( "json", JSON.stringify([this.state.flatInfo]) );

        fetch("https://pro100.media/api/calc/frame/",
        {
            method: "POST",
            body: data
        })
        .then( res => res.json() )
        .then( res =>  this.setState({response: res.body}) )
    }

    checkRoomInStorage(typeOfRoom, managementOption){

        const { flatInfo } = this.state;
        
        if(flatInfo.hasOwnProperty(typeOfRoom)){

            this.setState({ 
                flatInfo:{
                    ...flatInfo, 
                    [typeOfRoom]: {
                        
                        ...flatInfo[typeOfRoom],
                        [managementOption]: 1,
                    }     
                }
            });

        }else{
            const copyRoomOptions = {...RoomOptions};
            copyRoomOptions[managementOption] = 1;
            this.setState({ 
                flatInfo:{
                    ...flatInfo,
                    [typeOfRoom]: copyRoomOptions, 
                } 
            })
        }
    }
    
    getFormOptions(e, typeOfRoom, managementOption){

        if (e.target.checked) {
            this.checkRoomInStorage(typeOfRoom, managementOption);
           
        } else {

            this.setState({ 
                flatInfo:{

                    ...this.state.flatInfo,
                    [typeOfRoom]: {
                        ...this.state.flatInfo[typeOfRoom],
                        [managementOption]: 0,
                    }
                } 
            })
        }
    }

    setRoomsCount(e, typeCount) {
        this.setState({ 

            flatInfo: {
                ...this.state.flatInfo, 
                [typeCount]: e.target.value,
            } 
        });
    }

    nextForm(){
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        const {room_count, toilet_count} = this.state.flatInfo;

        const entryNumbers = (
            <div>
                <NumberRooms onChange={this.setRoomsCount}/>
                <NumberBathrooms onChange={this.setRoomsCount}/>
                <NumberWaterInlets onChange={this.setRoomsCount}/>
                <button onClick={this.nextForm}>Сохранить</button>
            </div>
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
                nextRoom = {this.handlerAPI}
                getOptions={this.getFormOptions}
                number={item} />
            }
            return <Room
            key={item} 
            nextRoom = {this.nextForm}
            getOptions={this.getFormOptions}
            number={item} />
        });

        const hall = (
            <Hall getOptions={this.getFormOptions} nextRoom={this.nextForm} />
        );
        const kitchen = (
            <Kitchen getOptions={this.getFormOptions} nextRoom={this.nextForm}/>
        );
        const allFormComponents = [
            entryNumbers, 
            kitchen, 
            hall,
            ...toilets,
            ...rooms
        ];

        return (
            <div style={Wrapper}>
                { 
                    this.state.isDisplayLastForm && 
                    allFormComponents[this.state.counter] 
                }

                {  
                    this.state.response && 
                    <div dangerouslySetInnerHTML={{ __html: this.state.response }} /> 
                }
            </div>
            
        )
    }  
  
}

export default App;