import React, {useEffect, useState} from 'react';
import {useStore} from 'effector-react';

import { $home, getHomeFetchFx, addProductEv } from '../../store/home';
import {getMockData} from './data.mock';

import {Layout} from '../../components/layouts/main/Layout';
import DataTable from '../../components/common/data-table';

import styles from './main.module.scss';

export const MainPage: React.FC = () => {
  const data = useStore($home)

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
          {!!data
            ? <DataTable
              table={data?.data.table}
              updateData={updateData}
              setData={setData}
            />
            : <div>нет продуктов</div>
          }

          {!!data && <div className={styles.addProductWrapper}>
            <button
              style={{
                minHeight: '30px',
                backgroundColor: 'orange',
                borderRadius: '10px',
                display: 'flex',
                padding: '5px 20px',
                justifyContent: 'center',
                fontWeight: 'bold',
                color: 'white'
              }}
              onClick={addProductInTable}
            >
              Добавить товар в таблицу
            </button>
          </div>}
        </div>
      </Layout>
    </div>
  );
}