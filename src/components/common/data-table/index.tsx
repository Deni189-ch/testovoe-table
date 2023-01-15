import React, {memo, useEffect, useState} from 'react';
import { useStore } from 'effector-react'
import clsx from 'clsx';

import {getDefaultValueArrayCheckbox, getNewCheckedArray} from './utils';
import { tableType } from '../../../page/main/data.mock';

import ActionBarContainer from './ActionBarContainer';
import TableThead from './TableThead';
import TableTbody from './TableTbody';

import {DataTableType} from './types';
import styles from './data-table.module.scss';


const DataTable: React.FC<DataTableType> = ({
                                    table: { topBar, items, actionBar },
                                    hasCheckedAction = true,
                                    updateData,
                                    setData,
                                  }) => {
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const [checkedID, setCheckedID] = useState(() => {
    if (items) return getDefaultValueArrayCheckbox(items, 'productId');
  });

  useEffect(() => {
    // отображение количества выделенных чекбоксов на страничке
    if (checkedID && items) {
      setCheckedID(getNewCheckedArray(items, checkedID));
    }
  }, [items]);

  return (
    <>
      {!!actionBar && (
        <ActionBarContainer
          hasCheckedAction={hasCheckedAction}
          lengthProduct={items.length}
          actionBar={actionBar}
          checkedID={checkedID}
        />
      )}
      
      <div
        id="tableСommon"
        className={styles.tableWrapper}
      >
        <table className={clsx(styles.table, styles.full)}>
          <TableThead
            styles={styles}
            topBar={topBar}
          />

          <TableTbody
            setCheckedID={setCheckedID}
            checkedID={checkedID}
            setData={setData}
            styles={styles}
            topBar={topBar}
            items={items}
          />
        </table>
      </div>
    </>
  );
};

export default memo(DataTable);
