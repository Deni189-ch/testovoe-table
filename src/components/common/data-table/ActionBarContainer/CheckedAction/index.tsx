import clsx from 'clsx';
import React, { useContext, useEffect, useState }  from 'react';
import { DataTableRowContext } from '../../../../../context/data-table-row';

import {CheckedActionType} from './types';
import styles from './CheckedAction.module.scss';

const CheckedAction: React.FC<CheckedActionType> = ({checkedID, lengthProduct}) => {
  const [checked, setChecked] = useState(false)

  useEffect(()=> {
    if(lengthProduct === checkedID.length) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }, [checkedID])

  return (
    <div style={{display: 'flex'}}>
      <label className={clsx(styles.root, {[styles.checked]: checked})}>
        <input
          className={styles.input}
          type="checkbox"
        />
        <span className={styles.checkbox}/>
      </label>
    </div>
  );
};
export default CheckedAction;
