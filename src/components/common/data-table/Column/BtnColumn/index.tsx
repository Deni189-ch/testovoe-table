import React from 'react';

import styles from './BtnColumn.module.scss';

export const BtnColumn = ({data: {value, id}}: any) => {
  const onClick = () => {
    alert(id)
  }
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.wrapperButton}
        onClick={onClick}
      >
        {!!value && value}
      </button>
    </div>
  );
}
