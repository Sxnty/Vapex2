import React, {createContext, useEffect, useState} from 'react'
import { getOrders } from '../firestore_api'


export const OrderContext = createContext();

export const OrdersProvider = ({children}) => {
    const [orders, setOrders] =useState([])
    useEffect(() => {
        const prueba = async () => {
            let result = await getOrders()
            setOrders(result)
        }
        prueba()
    }, []);

    return (
        <OrderContext.Provider value={{orders}}>
            {children}
        </OrderContext.Provider>
    )


}