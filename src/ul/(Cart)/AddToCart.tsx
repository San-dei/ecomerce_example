"use client";
import React, { useState } from 'react';
import { Store } from "@/interfaces/barril";
import useProductStore from "@/store/principal";
import { IoIosStar } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import styles from "../../styles/addtocart.module.css";
import Alert from '@/components/Alert'; // Importa el componente Alert

interface Props {
  item: Store;
}

/**
 * Genera los botones de compra y favoritos junto con gestor de estado global
 * @param {Store} - Admite strings y numeros
 * @returns {JSX.Element} - Retorna un elemento de JSX
 */
const AddToCart: React.FC<Props> = ({ item }): JSX.Element => {
  const addToProductCart = useProductStore((state) => state.addToCart);
  const addToProductFavorits = useProductStore((state) => state.addToFavorits);

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const showAlert = (message: string) => {
    setAlertMessage(message);
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 2000);
  };

  return (
    <>
      {alertVisible && (
        <Alert message={alertMessage} onClose={() => setAlertVisible(false)} />
      )}
      <button
        onClick={() => {
          addToProductCart(item);
          showAlert("Producto añadido al carrito!");
        }}
        className={styles.button_agregar}
      >
        Agregar <FaCartPlus />
      </button>
      <button
        onClick={() => {
          addToProductFavorits(item);
          showAlert("Producto añadido a favoritos!");
        }}
        className={styles.button_favoritos}
      >
        Favorito <IoIosStar />
      </button>
    </>
  );
};

export default AddToCart;
