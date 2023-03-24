import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { OrderContext } from "../context/OrdersContext";
import "../styles/orders.scss";

const Orders = () => {
  let { userLoged } = useContext(AuthContext);
  let { orders } = useContext(OrderContext);
  const filteredOrders = orders.filter((e) => e.uid === userLoged.uid);
  return (
    <>
      <section className="orders__list">
        {filteredOrders.map((e) => {
          return (
            <>
              <div className="order">
                <h2>Fecha: {e.time}</h2>
                <h3>Precio total: ${e.price}</h3>
                <span>Codigo de rastreo: {e.id}</span>
                {e.products.map((element) => {
                  return (
                    <>
                    <div className="order__product">
                    <p>Nombre de producto: {element.name}</p>
                      <p>Cantidad: {element.amount}</p>
                      <p>Precio: ${element.price * element.amount}</p>
                    </div>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Orders;
