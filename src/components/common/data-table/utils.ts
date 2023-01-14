export const a = 1
// // собираем новый массив с id или productId
// export const getDefaultValueArrayCheckbox = (items, id) => {
//   if (!items?.length) return [];
//
//   const defaultArray = [];
//
//   items.map(({ columns: columnsObject }, index) => {
//     Object.entries(columnsObject).map(([code, column]) => {
//       const { type, value } = column;
//
//       if (type === 'checkbox' && value === true) {
//         defaultArray.push(columnsObject.id.value);
//       }
//     });
//   });
//
//   return defaultArray;
// };
//
// // отображение количество выделенных чекбоксов на страничке
// export const getNewCheckedArray = (items, arrayID) => {
//   if (!items?.length) return [];
//
//   const defaultArray = [];
//
//   arrayID.filter((ID) => {
//     items.filter(({ columns: columnsObject }, index) => {
//       Object.entries(columnsObject).filter(([el, column]) => {
//         const { code, value } = column;
//
//         if (code === 'id' && value === ID) {
//           defaultArray.push(ID);
//         }
//       });
//     });
//   });
//   return defaultArray;
// };
//
// // собираем config  const [config, setConfig] = useState(
// export const getConfig = ({ topBar, bottomBar, pageConfig }) => {
//   let temp = {
//     sort_by: null,
//     sort_direction: null,
//     page: null,
//     per_page: null,
//     ...pageConfig,
//   };
//
//   if (topBar) {
//     // сортировка
//     const isSortableColumn = Object.entries(topBar).filter(
//       ([code, { isSort }]) => {
//         return isSort === true;
//       }
//     );
//
//     if (isSortableColumn.length) {
//       const { code, sortDirection } = isSortableColumn[0][1];
//       temp = {
//         ...temp,
//         sort_by: code,
//         sort_direction: sortDirection,
//       };
//     }
//   }
//
//   // пагинация
//   if (!!bottomBar && !!bottomBar.pagination) {
//     const { activePage, activePerPage } = bottomBar.pagination;
//     temp = {
//       ...temp,
//       page: activePage,
//       per_page: activePerPage,
//     };
//   }
//
//   return temp;
// };
//
// // изменить сортировку и получить новый config. (по возрастанию/убыванию)
// export const getNewConfigChangeSort = ({ code, config }) => {
//   let newConfig = {};
//
//   if (config.sort_by === code && config.sort_direction === 'asc') {
//     newConfig = {
//       ...config,
//       sort_by: code,
//       sort_direction: 'desc',
//       page: null,
//     };
//   } else {
//     newConfig = {
//       ...config,
//       sort_by: code,
//       sort_direction: 'asc',
//       page: null,
//     };
//   }
//
//   return newConfig;
// };
