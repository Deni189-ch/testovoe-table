import React, {useContext, useEffect, useState} from 'react';
import {useStore} from 'effector-react';

import {$home, getHomeFetchFx, addProductEv} from '../../store/home';
import {getMockData} from './data.mock';

import {Layout} from '../../components/layouts/main/Layout';
import DataTable from '../../components/common/data-table';

import styles from './main.module.scss';
import {DataTableRowContext} from '../../context/data-table-row';

export const MainPage: React.FC = () => {
  const StoreData = useStore($home)

  useEffect(() => {
    getHomeFetchFx('http://testing')
  }, [])

  const addProductInTable = () => {
    addProductEv()
  }

  const updateData = () => {
  }
  const setData = () => {
  }
  return (
    <div className="container noPadding border-edges">
      <Layout>
        <div>
          {!!StoreData
            ? <>
              <DataTable
                table={StoreData?.data.table}
                updateData={updateData}
                setData={setData}
              />


              <div className={styles.addProductWrapper}>
                <button
                  className={styles.buttonAdd}
                  onClick={addProductInTable}
                >
                  Добавить товар в таблицу
                </button>
              </div>
            </>
            : <div>нет продуктов</div>
          }
        </div>
      </Layout>
    </div>
  );
}