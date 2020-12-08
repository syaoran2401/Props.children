import React, { Component } from 'react'
import DemoProps from './Props/DemoProps'
import ProductList from './RenderShoes/ProductList'
import dataJson from './RenderShoes/data.json'
import PhoneList from './RenderPhones/PhoneList'
import CarList from './RenderCars/CarList'
import ExerciseCarStore from './RenderCars/ExerciseCarStore'
import ShoesStore from './RenderShoes/ShoesStore'
import Parent from './Props/Parent'

export default class App extends Component {
  render() {
    return (
      // <div className="container-fluid">
      //   {/* <DemoProps/> */}

      //   <div className="row">
      //     <div className="col-3">

      //       <div className="nav flex-column nav-pills justify-content-center" style={{ minHeight: "500px", width: '80%' }} id="v-pills-tab" role="tablist" aria-orientation="vertical">
      //         <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#home" role="tab">Home</a>
      //         <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#shop" role="tab">Shop</a>
      //       </div>

      //     </div>
      //     <div className="col-9">
      //       <div className="tab-content" id="v-pills-tabContent">
      //         <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="v-pills-home-tab">

      //           <ProductList arrProduct={dataJson}></ProductList>

      //         </div>



      //         <div className="tab-pane fade" id="shop" role="tabpanel" aria-labelledby="v-pills-profile-tab">Shop</div>

      //       </div>
      //     </div>
      //   </div>

      // </div>
      <div>

        <Parent/>
        {/* <ShoesStore/> */}
        {/* <PhoneList/> */}
        {/* <ExerciseCarStore></ExerciseCarStore> */}
      </div>
    )
  }
}
