import React, {useState} from 'react';

import {getMockData} from './data.mock';
import {Layout} from '../../components/layouts/main/Layout';
import DataTable from '../../components/common/data-table';

export const MainPage = () => {
  const [dataTable, setDataTable] = useState(getMockData);

  const updateData = () => {
  }
  const setData = () => {
  }
  return (
    <div className="container noPadding border-edges" >
      <Layout>
        <div >
          <DataTable
            table={dataTable.data.table}
            updateData={updateData}
            setData={setData}
          />
        </div>
      </Layout>
    </div>
  );
}