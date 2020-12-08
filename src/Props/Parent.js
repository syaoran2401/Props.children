import React, { Component } from 'react'
import Child from './Child'
import ChildFunctional from './ChildFunctional';

export default class Parent extends Component {

   
    // name = 'panda';

    // product = {
    //     id:1,
    //     src:'https://tinyjpg.com/images/social/website.jpg',
    //     name:'panda',
    //     desc: 'black and white',
    //     size:[30,40,50],
    // }


    // size = [30,40,70]


    // showInfo = (name) =>{
    //     alert(name)
    // }

    render() {
        return (
            // <div>
            //     <input type="password" />
               
            //     {/* <ChildFunctional propSource={this.src} name={this.name}/> */}

            //     {/* Truyền vào 1 object */}
            //     {/* <ChildFunctional productItem={this.product}></ChildFunctional> */}


            //     <Child showAlert={this.showInfo} productItem={this.product} shoesSize={this.size}/>
            // </div>
            <div>
                <h3>DANH SACH SAN PHAM</h3>
                {/* {this.props.componentPhoneList()} */}
                <this.props.componentPhoneList/>
            </div>
        )
    }
}
