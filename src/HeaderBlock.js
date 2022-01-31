import React from 'react'
import './HeaderBlock.css'

function HeaderBlock() {
    return (
        <div className="headerBlock">
            <div className="headerBlock-info">
                <div className="headerBlock-infoText">
                    <h1>Model 3</h1>
                    <h4>
                        Order Online for <span>Touchless Delivery</span>
                    </h4>
                </div>
                <div className="headerBlock-actions">
                    <button className="headerBlock-buttonPrimary">custom order</button>
                    <button className="headerBlock-buttonSecondary">
                        existing inventory
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeaderBlock
