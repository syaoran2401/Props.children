import React, { Component } from 'react'

export default class CarItem extends Component {


    render() {
        let { img, price, name } = this.props.carItemProps;
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={img} alt={img} />
                    <div className="card-body">
                        <h4 className="card-title font-weight-bold">{name}</h4>
                        <p className="card-text">{price}</p>
                        <button onClick={() => this.props.carButtonProps(this.props.carItemProps)} className="btn btn-success" data-toggle="modal" data-target="#exampleModal">Xem chi tiet</button>
                    </div>
                </div>
            </div>
        )
    }
}
