import React, { Component } from 'react'
import CarItem from './CarItem'

export default class CarList extends Component {



    RenderCar = () => {

        return this.props.productProp.map((item, index) => {
            return (
                <div className="col-3" key={index}>   
                    <CarItem carItemProps={item} carButtonProps={this.props.modalCar} />
                </div>
            )
        })
    }




    render() {
        return (
            <div className='container-fluid'>
                <div class="row mt-3">
                    {this.RenderCar()}
                </div>

                
            </div>


        )
    }
}
