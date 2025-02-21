import { useState } from "react"
import { MenuItem, OrderItem } from "../types"

export default function useOrder () {
    const [ order , setOrder] =useState<OrderItem[]>([])
    const[tip, setTip]= useState(0)

    const addItem = (item : MenuItem) => {
        const itemExist= order.find(i => i.id === item.id)

        if(itemExist){
            const updateOrder= order.map(i => i.id === item.id ? {...i, quantity: i.quantity +1} : i)
            setOrder(updateOrder)
        }
        else{
            const newItem : OrderItem = {...item, quantity: 1}

        setOrder([... order, newItem])
        }
    }

    const removeItem =(id: MenuItem['id']) =>{
        setOrder(order.filter(item => item.id !== id))
    }
    
    return {
        order,
        addItem,
        removeItem,
        tip, 
        setTip
    }
}