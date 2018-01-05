import React from "react";

const CartoonCard = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

export default CartoonCard;