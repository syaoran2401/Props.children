import React, { Component } from 'react'
import Modal from '../RenderShoes/Modal'
import ProductList from './ProductList'
import dataShoes from './data.json'

export default class ShoesStore extends Component {

    state = {
        productDetail: {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
          }
    }


    modalItem = (newShoes) =>{
        this.setState({
            productDetail: newShoes
        })
    }



    render() {
        return (
            <div>
                <Modal modalProduct={this.state.productDetail}></Modal>
                <ProductList productListProps={dataShoes} modalItem={this.modalItem}></ProductList>
            </div>
        )
    }
}
