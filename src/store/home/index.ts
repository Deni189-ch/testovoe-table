import {createStore, createEffect, createEvent} from 'effector';
import {getMockData} from '../../page/main/data.mock';

export const getHomeFetchFx = createEffect(async (url: string) => {
  return new Promise((resolve) => setTimeout(resolve, 1000, {getMockData}));
});

export const addProductEv = createEvent()
export const addProductFn = (state: any) => {
  return {
    data: {
      table: {
        topBar: {...state.data.table.topBar},
        items: [...state.data.table.items, {...state.data.table.items[0]}]
      }
    }
  }
}

export const $home = createStore<null | any>(null).on(
  getHomeFetchFx.doneData,
  (state, payloud) => {
    //@ts-ignore
    return payloud.getMockData;
  }
)
  .on(addProductEv, (state, product) => {
    const result = addProductFn(state)
    return result
  })