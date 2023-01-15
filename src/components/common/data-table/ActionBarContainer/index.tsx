import React, {memo} from 'react';

import CheckedAction from './CheckedAction';
import SearchBoxContainer from './SearchBoxContainer';

import {actionBarType} from '../../../../page/main/data.mock';
import {ActionBarContainerType} from './types';

import styles from './ActionBarContainer.module.scss';

const ActionBarContainer: React.FC<ActionBarContainerType> = ({
                                                                lengthProduct,
                                                                hasCheckedAction,
                                                                checkedID,
                                                                actionBar,
                                                              }) => {
  return (
    <div className={styles.wrapper}>
      {!!hasCheckedAction && (<>
        <CheckedAction lengthProduct={lengthProduct} checkedID={checkedID}/>
        <span className={styles.countChek}>
          {checkedID.length > 0 && checkedID.length}
        </span>
      </>)}

      {!!actionBar?.search && (
        <SearchBoxContainer/>
      )}
    </div>
  );
};

export default memo(ActionBarContainer);
