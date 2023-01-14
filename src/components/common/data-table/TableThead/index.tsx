import React, {memo} from 'react';
import clsx from 'clsx';

import { cellType } from '../../../../page/main/data.mock';
import {DataTableTheadType} from './types'

const DataTableThead: React.FC<DataTableTheadType> = ({
                                                        topBar,
                                                        styles,
                                                      }) => {
  if (!Object.keys(topBar).length) return null;

  const dataValues = Object.values(topBar);

  return (
    <thead>
    <tr>
      {dataValues.map(
        ({
           title,
           code,
         }: cellType) => {
          return (
            <th
              key={`${code}-${title}`}
              className={clsx(!!code && styles[code], {})}
            >
              {!!title && (
                <span dangerouslySetInnerHTML={{__html: `${title}`}}/>
              )}

            </th>
          );
        }
      )}
    </tr>
    </thead>
  );
};

export default memo(DataTableThead);
