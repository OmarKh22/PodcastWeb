import React from 'react';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.errorText}>Page Not Found</h2>
      <p className={styles.description}>
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
    </div>
  );
};

export default NotFound;
