// собираем новый массив с id или productId

import {columnsType} from '../../../page/main/data.mock';

export const getDefaultValueArrayCheckbox = (items: Array<columnsType>, id: string) => {
  if (!items?.length) return [];

  const defaultArray: [] | Array<string> = [];


  items.map(({columns: columnsObject}, index) => {
    Object.entries(columnsObject).map(([code, column]) => {

      const {type, value} = column;

      if (type === 'checkbox' && value === true) {
        //@ts-ignore
        defaultArray.push(columnsObject.id.value);
      }
    });
  });
  return defaultArray;
};

// отображение количество выделенных чекбоксов на страничке
export const getNewCheckedArray = (items: Array<columnsType>, arrayID: Array<string>) => {
  if (!items?.length) return [];

  const defaultArray: [] | Array<string> = [];

  arrayID.filter((ID) => {
    items.filter(({columns: columnsObject}, index) => {
      Object.entries(columnsObject).filter(([el, column]) => {
        const {code, value} = column;

        if (code === 'id' && value === ID) {
          //@ts-ignore
          defaultArray.push(ID);
        }
      });
    });
  });
  return defaultArray;
};
