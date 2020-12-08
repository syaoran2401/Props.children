import React, { Component } from 'react'
import CarList from './CarList'
import Modal from './Modal'

export default class ExerciseCarStore extends Component {
  
    product = [
        {
            id: 1,
            name: 'black car',
            img: './carImg/black-car.jpg',
            price: 1000
        },
        {
            id: 1,
            name: 'red car',
            img: './carImg/red-car.jpg',
            price: 2000
        },
        {
            id: 1,
            name: 'silver car',
            img: './carImg/silver-car.jpg',
            price: 3000
        },
        {
            id: 1,
            name: 'steel car',
            img: './carImg/steel-car.jpg',
            price: 4000
        },
    ]



    state = {
        itemDetail:{
            id: 1,
            name: 'black car',
            img: './carImg/black-car.jpg',
            price: 1000
        }
    }

    
    modalCar = (newCar) => {
        this.setState({
            itemDetail: newCar
        })
    }



    render() {
        return (
            <div>
                <CarList productProp={this.product} modalCar={this.modalCar}  />
                <Modal content={this.state.itemDetail}/>
            </div>
      
        )
    }
}
