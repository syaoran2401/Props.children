import React, { Component } from "react";
import dataPhone from "./dataPhone.json";
import PhoneItem from "./PhoneItem";

export default class PhoneList extends Component {
    // arrayPhone = dataPhone;

    arrayPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./phoneImg/vsphone.jpg" },

        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./phoneImg/meizuphone.jpg" },

        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./phoneImg/applephone.jpg" }


    ]

    state = {
        productDetail: {
            maSP: 1,
            tenSP: "VinSmart Live",
            manHinh: "AMOLED, 6.2, Full HD+",
            heDieuHanh: "Android 9.0 (Pie)",
            cameraTruoc: "20 MP",
            cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 5700000,
            hinhAnh: "./phoneImg/vsphone.jpg",
        },
    };

    renderProduct = () => {
        return this.arrayPhone.map((item, index) => {
            return (
                <div key={index} className="col-4">
                   <PhoneItem sanPhamProps={item} xemChiTiet={this.RenderDetailProduct} ></PhoneItem>
                </div>
            );
        });
    };


    RenderDetailProduct = (sanPhamChon) => {
        this.setState({
            productDetail: sanPhamChon
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h3 className="display-4 text-center">Danh Sach San Pham</h3>
                    <div className="row">
                        {this.renderProduct()}
                    </div>
                    <div className="row">
                        <div className='col-4'>
                            <h3>{this.state.productDetail.tenSP}</h3>
                            <img style={{ width: '100%' }} src={this.state.productDetail.hinhAnh} alt={this.state.productDetail.hinhAnh} />
                        </div>

                        <div className='col-8'>
                            <h3>Thong So Ky Thuat</h3>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Man Hinh</th>
                                        <th>{this.state.productDetail.manHinh}</th>
                                    </tr>

                                    <tr>
                                        <th>He Dieu Hanh</th>
                                        <th>{this.state.productDetail.heDieuHanh}</th>
                                    </tr>

                                    <tr>
                                        <th>Camera Truoc</th>
                                        <th>{this.state.productDetail.cameraTruoc}</th>
                                    </tr>

                                    <tr>
                                        <th>Camera Sau</th>
                                        <th>{this.state.productDetail.cameraTruoc}</th>
                                    </tr>

                                    <tr>
                                        <th>Ram</th>
                                        <th>{this.state.productDetail.ram}</th>
                                    </tr>

                                    <tr>
                                        <th>Rom</th>
                                        <th>{this.state.productDetail.rom}</th>
                                    </tr>
                                </thead>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
