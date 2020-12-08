import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {

        let {image,name,price} = this.props.productDetailProps;

        return (
            <div>
                 <div className="card text-left">
                        <img className="card-img-top" src={image} alt={image}  style={{width:'300px'}}/>
                        <div className="card-body">
                            <h4 className="card-title">{name}</h4>
                            <p className="card-text">${price}</p>
                            <button className="w3-button w3-black">Add to cart <i className="fa fa-shopping-cart"></i></button>
                            <button onClick={()=>{this.props.modalItem(this.props.productDetailProps)}} className='btn btn-success ml-5' data-toggle="modal" data-target="#exampleModal">Xem Chi Tiet</button>
                        </div>
                    </div>
            </div>
        )
    }
}
