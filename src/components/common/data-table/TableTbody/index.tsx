import React, {memo} from 'react';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';

import {DataTableRowContextProvider} from '../../../../context/data-table-row';
import Column from '../Column';

import { TableTbodyType } from './types';
import {columnsCellType, columnsType } from '../../../../page/main/data.mock';


const TableTbody: React.FC<TableTbodyType> = ({
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
      //@ts-ignore
      ({columns: columnsObject}, index) => {
        const filteredColumnsObject = Object.entries(columnsObject).filter(
          //@ts-ignore
          ([code, {type, value}]) => {
            return type !== 'hidden';
          }
        );
        return (
          <DataTableRowContextProvider
            // key={columnsObject.productId}
            key={uuidv4()}
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
                : filteredColumnsObject.map(([code, column], i) => {

                  return (
                    <td
                      className={clsx(!!code && styles[code])}
                      key={uuidv4()}
                    >
                      <Column
                        //@ts-ignore
                        data={column}
                        code={code}
                        config={
                          {
                            //@ts-ignore
                            ...topBar[code],
                            sorting: {...config},
                          } ?? {}
                        }
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
