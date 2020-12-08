import React from 'react'

export default function ChildFunctional(props) {

    let {src,name,desc} = props.productItem;

    return (
        // <div>
        //     <img style={{ width: "150px" }} src={props.propSource} alt=''></img>
        //     <div className="card text-left">
        //         <img style={{ width: "200px" }} className="card-img-top" src={props.propSource} alt='' />
        //         <div className="card-body">
        //             <h4 className="card-title">{props.name}</h4>
        //             <p className="card-text">Body</p>
        //         </div>
        //     </div>
        // </div>

        <div>
            {/* <img style={{ width: "150px" }} src={props.productItem.src} alt=''></img> */}
            <img style={{ width: "150px" }} src={src} alt=''></img>
            <div className="card text-left">
                <img style={{ width: "200px" }} className="card-img-top" src={src} alt='' />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{desc}</p>
                </div>
            </div>
        </div>
    )
}
