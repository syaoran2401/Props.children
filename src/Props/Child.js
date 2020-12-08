import React, { Component } from 'react'

export default class Child extends Component {

    
    renderSize = () => {
        let { size } = this.props.productItem;
        return size.map((number, index) => {
            return (
                <button key={index}>{number}</button>
            )
        })
    }


    render() {

        // Truyền vào 1 object
        let { src, name, desc } = this.props.productItem;

        // Truyền vào 1 mảng
        let {shoesSize} = this.props;

        return (
            // <div>
            //     <img style={{ width: "150px" }} src={this.props.propSource} alt=''></img>
            //     <div className="card text-left">
            //         <img style={{ width: "200px" }} className="card-img-top" src={this.props.propSource} alt='' />
            //         <div className="card-body">
            //             <h4 className="card-title">{this.props.name}</h4>
            //             <p className="card-text">Body</p>
            //         </div>
            //     </div>

            // </div>


            <div>
                <img style={{ width: "150px" }} src={src} alt=''></img>
                <div className="card text-left">
                    <img style={{ width: "200px" }} className="card-img-top" src={src} alt='' />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{desc}</p>
                        {this.renderSize()}
                        <br/>

                        {/* truyền vào 1 mảng */}
                        {shoesSize.map((number,index)=> {
                            return  <button className="btn btn-success" key={index}>{number}</button>
                        })}

                        {/* Truyền vào 1 function */}
                        <button onClick={() =>{
                            this.props.showAlert(desc)
                        }}>Detail</button>
                    </div>
                </div>

            </div>
        )


    }
}
