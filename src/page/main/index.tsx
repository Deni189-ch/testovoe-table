import React, {useState} from 'react';

import {getMockData} from './data.mock';
import {Layout} from '../../components/layouts/main/Layout';
import DataTable from '../../components/common/data-table';

import styles from './main.module.scss';

export const MainPage = () => {
  const [dataTable, setDataTable] = useState(getMockData);

  const addProductInTable = () => {
    
  }
  const updateData = () => {
  }
  const setData = () => {
  }
  return (
    <div className="container noPadding border-edges">
      <Layout>
        <div>
          <DataTable
            table={dataTable.data.table}
            updateData={updateData}
            setData={setData}
          />

          <div className={styles.addProductWrapper}>
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
          </div>
        </div>
      </Layout>
    </div>
  );
}