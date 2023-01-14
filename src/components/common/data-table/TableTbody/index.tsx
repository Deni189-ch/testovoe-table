import React, {memo} from 'react';
import clsx from 'clsx';

import {DataTableRowContextProvider} from '../../../../context/data-table-row';
import Column from '../Column';


const TableTbody: React.FC<any> = ({
                                     setCheckedID,
                                     checkedID,
                                     setData,
                                     topBar,
                                     config,
                                     styles,
                                     items,
                                   }) => {
  if (!Object.keys(items).length) return null;

  return (
    <tbody>
    {(!!items && !!items?.length ? items : Object.entries(items)).map(
      ({columns: columnsObject, isNew, isArchive}, index) => {
        const filteredColumnsObject = Object.entries(columnsObject).filter(
          ([code, {type, value}]) => {
            return type !== 'hidden';
          }
        );
        return (
          <DataTableRowContextProvider
            key={columnsObject.productId}
            setCheckedID={setCheckedID}
            columns={columnsObject}
            checkedID={checkedID}
            setData={setData}
            index={index}
          >
            <tr
              className={clsx(
                styles.row,
              )}
              key={columnsObject?.productId?.value ?? index}
            >
              {columnsObject?.length
                ? columnsObject
                : filteredColumnsObject.map(([code, column]) => {

                  const {
                    useSendCallPrice,
                    underReview,
                    visibleType,
                    needVerify,
                    warning,
                  } = column;

                  return (
                    <td
                      className={clsx(
                        !!code && styles[code],
                        !!visibleType && styles[visibleType],
                        !!isNew && styles.isNew,
                        !!useSendCallPrice && styles['price_asc--no_price'],
                        !!warning && styles['position--warning'],
                        !!needVerify && styles['notInAvailable--verify'],
                        !!underReview && styles['status--underReview'],
                      )}
                    >
                      <Column
                        data={column}
                        code={code}
                        config={
                          {
                            ...topBar[code],
                            sorting: {...config},
                          } ?? {}
                        }
                        classes={{isNew: isNew ? styles.isNew : null}}
                      />
                    </td>
                  );
                })}
            </tr>
          </DataTableRowContextProvider>
        );
      }
    )}
    </tbody>
  );
};

export default memo(TableTbody);
