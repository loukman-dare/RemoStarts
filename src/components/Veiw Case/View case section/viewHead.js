import React from 'react'
import v1 from "../../../images/Абв.png"
import v2 from "../../../images/Fonts.png"
import v3 from "../../../images/LOGO (1).png"
import v4 from "../../../images/Letters.png"
import v5 from "../../../images/font-style.png"
import v6 from "../../../images/menu.png"

function ViewHead() {
  return (
    <div className='viewhead '>
        <img src={v3} />
        <img src={v1} />
        <img src={v5} />
        <img src={v4} />
        <img src={v2} />
        <img src={v6} />
    </div>
  )
}

export default ViewHead