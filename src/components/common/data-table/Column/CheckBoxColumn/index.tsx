import React, {useContext, useEffect, useState} from 'react';
import clsx from 'clsx';

import {DataTableRowContext} from '../../../../../context/data-table-row';

import styles from './CheckBoxColumn.module.scss';


export const CheckBoxColumn = ({data: {value}}: any) => {
  //@ts-ignore
  const { columns, setCheckedID, checkedID } = useContext(DataTableRowContext);
  const [checked, setChecked] = useState(checkedID.includes(columns.id.value));

  const toggleCheckedRow = (status: boolean) => {
    if (status) {
      // собираем id для отображения колличества выделенных чекбоксов таблицы
      if (!checkedID.includes(columns?.id.value))
        setCheckedID([...checkedID, columns.id.value]);
    } else {
      // удаляем id меняем отображение колличества выделенных чекбоксов таблицы
      setCheckedID(checkedID.filter((item: string) => item !== columns.id.value));
    }
  };

  const onChangeHandler = () => {
    setChecked(!checked)
    toggleCheckedRow(!checked)
  }
  return (
    <div>
      <label className={clsx(styles.root, {[styles.checked]: checked})}>
        <input
          className={styles.input}
          onChange={onChangeHandler}
          type="checkbox"
        />
        <span className={styles.checkbox}/>
      </label>
    </div>
  );
}
