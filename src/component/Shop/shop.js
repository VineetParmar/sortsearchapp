import React,{ useState }from 'react'
import Header from '../Home/header'
import Footer from '../Home/footer'
import Json from '../../db.json'


const Shop = () => {


  return (
    <div>
      <Header/>
      <div id="prod-1" className="section-p1">
            <h2>Search Your Products</h2>
             <p>Exculsive Collection New Seasonal Design</p>
        </div>
        <div id='Sort'>
          <h2>Products
        </h2>
        </div>
        <div className="conts">
        
        {
         Json.map((item)=>{
             return (
              <>
               <div  key={item._id} className="prod">
                <div><h4>Name:{item.title}</h4>
                <p>Price:{item.price}</p>
                <p>Category:{item.category}</p>
                <span>Rate:{item.rating.count}||Count:{item.rating.rate}</span>
                </div>
            </div>
              </>
          )
          })
        }
                    </div>
        <Footer/>
    </div>
  )

  
  
}

export default Shop