import React, {memo} from 'react';

import CheckedAction from './CheckedAction';
import SearchBoxContainer from './SearchBoxContainer';

import {actionBarType} from '../../../../page/main/data.mock';
import {ActionBarContainerType} from './types';

import styles from './ActionBarContainer.module.scss';

const ActionBarContainer: React.FC<ActionBarContainerType> = ({
                                                                hasCheckedAction,
                                                                actionBar,
                                                              }) => {
  return (
    <div className={styles.wrapper}>
      {!!hasCheckedAction && (
        <CheckedAction/>
      )}

      {!!actionBar?.search && (
        <SearchBoxContainer/>
      )}
    </div>
  );
};

export default memo(ActionBarContainer);
