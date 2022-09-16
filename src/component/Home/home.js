import React,{useState}from 'react'
import Header from './header'
import Footer from './footer'
import Json from '../../db.json'
import './home.css'


const Home = () => {

  const[data,setdata] = useState(Json);

  const filterPD = (event)=>{
    const elemt = event.target.value;
    console.log(elemt);
    const newPD = Json.filter((pd) => {
      return pd.category === elemt;
    });

    setdata(newPD);

  }

  return (
    <div>
        <Header/>
        <div id="prod-1" className="section-p1">
            <h2>Choose Your Products</h2>
             <p>Exculsive Collection New Seasonal Design</p>
        </div>
        <div id='Sort'>
          <h2>Sort By Category
        </h2>
  <select onChange={filterPD}  name="products" id="products">
    <option value="men's clothing" >Mens</option>
    <option value="women's clothing">Womens</option>
    <option value="jewelery">Jewelery</option>
    <option value="electronics">Electronics</option>
  </select>
        </div>
        <div className="conts">
        
        {
          data.map((item)=>{
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



export default Home