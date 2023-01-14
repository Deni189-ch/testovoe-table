import React, {memo} from 'react';
import clsx from 'clsx';

const DataTableThead: React.FC<any> = ({
                                         data,
                                         styles,
                                       }: any) => {
  if (!Object.keys(data).length) return null;

  const dataValues = Object.values(data);

  return (
    <thead>
    <tr>
      {dataValues.map(
        ({
           title,
           code,
         }: any) => {
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
