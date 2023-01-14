import React, {memo} from 'react';

import CheckedAction from './CheckedAction';
import SearchBoxContainer from './SearchBoxContainer';

const ActionBarContainer: React.FC<any> = ({
                                             actionBar,
                                             hasCheckedAction,
                                           }) => {
  return (
    <div style={{
      backgroundColor: '#f7f8fa',
      padding: '10px 10px 5px 10px',
      display: 'flex',
    }}>
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
