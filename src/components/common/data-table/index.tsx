import React, {memo, useState} from 'react';

import {getDefaultValueArrayCheckbox, getConfig} from '../utils';

import ActionBarContainer from './ActionBarContainer';
import TableThead from './TableThead';
import TableTbody from './TableTbody';

import styles from './data-table.module.scss';

const DataTable: React.FC<any> = ({
                                    hasCheckedAction = true,
                                    updateData,
                                    setData,
                                    table: { topBar, items, actionBar, bottomBar },
                                  }) => {
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const [checkedID, setCheckedID] = useState(() => {
    if (items) return getDefaultValueArrayCheckbox(items, 'productId');
  });

  const [config, setConfig] = useState(
    getConfig({ topBar, bottomBar })
  );

  return (

    <>
      {!!actionBar && (
        <ActionBarContainer
          hasCheckedAction={hasCheckedAction}
          actionBar={actionBar}
        />
      )}

      <div
        id="tableСommon"
        className={styles.tableWrapper}
      >
        <table className={styles.table}>
          <TableThead
            styles={styles}
            data={topBar}
          />

          <TableTbody
            setCheckedID={setCheckedID}
            checkedID={checkedID}
            setData={setData}
            styles={styles}
            topBar={topBar}
            config={config}
            items={items}
          />
        </table>
      </div>
    </>
  );
};

export default memo(DataTable);
