import React, { Component } from 'react'

export default class PhoneItem extends Component {
    
    render() {

        let {hinhAnh, tenSP,giaBan} = this.props.sanPhamProps;

        return (
            
            <div>
                 <div className="card text-left text-center">
                        <img
                            className="card-img-top"
                            style={{ width: "300px", margin: 'auto' }}
                            src={hinhAnh}
                            alt={hinhAnh}
                        />
                        <div className="card-body">
                            <h4 className="card-title">{tenSP}</h4>
                            <p className="card-text">{giaBan.toLocaleString()}</p>
                            <button className='btn btn-success' onClick={() => this.props.xemChiTiet(this.props.sanPhamProps)}>View Detail</button>
                        </div>
                    </div>
            </div>
        )
    }
}
