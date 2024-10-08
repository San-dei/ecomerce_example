import React from 'react';
import styles from '../styles/alert.module.css';

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
  return (
    <div className={styles.alertOverlay}>
      <div className={styles.alertBox}>
        <p>{message}</p>
        <button className={styles.closeButton} onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Alert;
