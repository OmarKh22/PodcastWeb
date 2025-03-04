import React from 'react';
import styles from './Loader.module.css';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
return(<>

<div className={styles.loaderContainer}>
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#AC6CFF"  
          radius="9"
          ariaLabel="three-dots-loading"
        />
      </div>
  </>
)};



export default Loader;