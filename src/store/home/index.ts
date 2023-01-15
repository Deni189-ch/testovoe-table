import {useContext} from 'react';
import {cloneDeep} from 'lodash';
import {createStore, createEffect, createEvent} from 'effector';

import {DataTableRowContext} from '../../context/data-table-row';
import {getMockData, MockDataType} from '../../page/main/data.mock';

export const getHomeFetchFx = createEffect(async (url: string) => {
  return new Promise((resolve) => setTimeout(resolve, 1000, {getMockData}));
});


export const addProductEv = createEvent()
export const addProductFn = (state: MockDataType) => {
  let addProduct = cloneDeep(state.data.table.items[state.data.table.items.length - 1].columns)
  //@ts-ignore
  let newId = (+addProduct.id.value + 3).toString()
  addProduct.id.value = newId
  return {
    data: {
      table: {
        topBar: {...state.data.table.topBar},
        actionBar: {...state.data.table.actionBar},
        items: [...state.data.table.items, {
          columns: {
            ...addProduct
          }
        }
        ]
      }
    }
  }
}

export const $home = createStore<null | MockDataType>(null)
  .on(getHomeFetchFx.doneData,
    (state, payloud) => {
      //@ts-ignore
      return payloud.getMockData;
    }
  )
  .on(addProductEv, (state) => {
    //@ts-ignore
    const result = addProductFn(state)
    return result
  })