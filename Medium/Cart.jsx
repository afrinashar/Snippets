import { useState } from "react";
import itemsData from "./items.json"
export const Cart = () => {
    const [items, setItems] = useState(itemsData.items);
    const [cart, setCart] = useState([]);
  const addCart=((itemId) =>{
const addItems=items.find((item)=>item.id===itemId)
const cartItem =cart.find((item)=>item.id===itemId)
if(cartItem){
  const updatedCart=cart.map((item)=>{
    if(item.id===itemId){
return{...item, quantity:(item.quantity||1)+1}
    }
    return item
  })
  setCart(updatedCart)
}else{
  setCart([...cart, {...addItems, quantity:1}])
}
  })
  const removeCart=(itemId)=>{
const remove = cart.filter((item)=>item.id!==itemId)
setCart(remove)
  }
  console.log(items);
  return (<>
    <div>Cart</div>
<ul>
    {items.map((item)=>{
      return ( <li key={item.id}><h3>{item.name}</h3> <span style={{color:"green", border:"green"}}>💲{item.price}</span><button onClick={()=>addCart(item.id)} > Cart</button></li>)
    })}
</ul>
<h2>Cart</h2>
<ul>{cart.map((item)=>{
  return (<li key={item.id}><h3>{item.name}</h3> <span style={{color:"green", border:"green"}}>💲{item.price}</span><button onClick={()=>addCart(item.id)} > Cart</button> <button onClick={()=>removeCart(item.id)}>🗑️</button></li>)
})}</ul>
 </> )
}
