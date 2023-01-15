import React, { useContext } from 'react';
import { DataTableRowContext } from '../../../../../context/data-table-row';

import styles from './BtnColumn.module.scss';

export const BtnColumn = ({data: {value}}: any) => {
  //@ts-ignore
  const { columns } = useContext(DataTableRowContext);
  const onClick = () => {
    alert( `id № ${columns.id.value}`)
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
