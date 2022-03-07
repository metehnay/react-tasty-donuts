import React from 'react'
import {Link} from 'react-router-dom'

const Donuts = ({post}) => {
    const {title, imageURL,name,recipe, photoURL} = post;
  return (
    <>
     <div className="d-flex flex-row m-2">
    <div className="image-box ">          <img src={imageURL} id="donut-img-3"/>     
</div>
<div className=" col-6">
          <h5 className=" py-2 m-2">{title}</h5>
          <p className="m-2">{recipe.slice(0,225)}...</p>

          <div className="d-flex m-2">

          <img src={photoURL} className="tp my-1" />

          <p className="mx-2 opacity-75">by {name}</p>
          </div>
          <p className="more"><Link to={`/donuts/${title}`}>Read More</Link></p> 

       </div>
         </div>
       
         <div className="bordero"></div></>
  )
}

export default Donuts