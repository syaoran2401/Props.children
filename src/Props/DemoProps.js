import React, { Component } from 'react'
import PhoneList from '../RenderPhones/PhoneList'
import Parent from './Parent'


export default class DemoProps extends Component {
    render() {
        return (
            <div>
               {/* <Parent componentPhoneList={() => {return <PhoneList/>}}/> */}
               <Parent componentPhoneList={PhoneList}/>
            </div>
        )
    }
}
