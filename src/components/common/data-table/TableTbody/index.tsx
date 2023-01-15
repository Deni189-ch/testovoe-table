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
                                     styles,
                                     items,
                                   }) => {
  if (!Object.keys(items).length) return null;

  return (
    <tbody>
    {(!!items && !!items?.length ? items : Object.entries(items)).map(
     
      ({columns: columnsObject}: any, index) => {
        const filteredColumnsObject = Object.entries(columnsObject).filter(
          ([code, {type, value}]: any) => {
            return type !== 'hidden';
          }
        );
        return (
          <DataTableRowContextProvider
            setCheckedID={setCheckedID}
            columns={columnsObject}
            checkedID={checkedID}
            setData={setData}
            key={uuidv4()}
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
