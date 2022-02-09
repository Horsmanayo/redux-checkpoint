import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/modules/todoItem.module.scss';
// const checkVariants = {
//     intitial;{
//         color: 'afff'
//     },
//     checked;{

//     }
// }
function CheckboxButton({ checked, setChecked }) {
  return (
    <motion.div className={styles.svgBox}>
      <svg
        className={styles.svg}
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}

export default CheckboxButton;
