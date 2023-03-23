import React, {createContext, useEffect, useState} from 'react'
import { getProducts } from '../firestore_api'

export const ProductsContext = createContext();
export const ProductsProvider = ({children}) => {
    const [products, setProducts] =useState([])
    useEffect(() => {
        const prueba = async () => {
            let result = await getProducts()
            setProducts(result)
        }
        prueba()
    }, []);

    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )


}
