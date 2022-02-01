import React from "react";
import cars from "../../assets/content-like-data";

import Card from "../card/card.component";

import './preview.styles.scss'

class Preview extends React.Component{
    constructor(){
        super()
        this.state = {
            cars: [],
            type: '1',
            currentCar: 1
        }
    }

    componentDidMount(){
        this.setState({
            cars: cars
        }) 
    }

    render(){ 
        const changeType = (number)=>{
            this.setState({
                type: number
            })
        }  

        const changecurrentCar = (number)=>{
            if(this.state.currentCar + number < 4 && this.state.currentCar + number > 0) {
                this.setState((prev)=>{
                    return {
                         currentCar: prev.currentCar + number
                    }
                })   
            }
        }
        return(
            <div className="preview">
                <div>
                    <button onClick={()=>changeType('1')}>Type one</button>
                    <div className="Vline"></div>
                    <button onClick={()=>changeType('2')}>Type two</button>
                    <div className="Vline"></div>
                    <button onClick={()=>changeType('3')}>Type three</button>
                </div>
                <div>
                    <i onClick={()=>changecurrentCar(-1)} className="arrow left">
                    </i>
                    <div>
                        <Card { ...this.state.cars.filter((car)=>{
                            return car.type === this.state.type ?
                                car.id === (`${this.state.currentCar}-${this.state.type}`) ?
                                true
                                :
                                false
                            :
                                false
                        })[0] } />
                    </div>
                    <i onClick={()=>changecurrentCar(+1)} className="arrow right">
                    </i>
                </div>
            </div>
        )
    }
}

export default Preview