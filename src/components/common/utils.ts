// собираем новый массив с id или productId
//@ts-ignore
export const getDefaultValueArrayCheckbox = (items, id) => {
  console.log('item=== id', id)
  console.log('items, id', items)
  if (!items?.length) return [];
  //@ts-ignore
  const defaultArray = [];
//@ts-ignore
//   return null
  items.map(({ columns: columnsObject }, index) => {
    Object.entries(columnsObject).map(([code, column]) => {
      //@ts-ignore
      const { type, value } = column;

      if (type === 'checkbox' && value === true) {
        defaultArray.push(columnsObject.id.value);
      }
    });
  });
//@ts-ignore
  return defaultArray;
};

// отображение количество выделенных чекбоксов на страничке
//@ts-ignore
export const getNewCheckedArray = (items, arrayID) => {
  if (!items?.length) return [];

  //@ts-ignore
  const defaultArray = [];

  //@ts-ignore
  arrayID.filter((ID) => {
    //@ts-ignore
    items.filter(({ columns: columnsObject }, index) => {
      Object.entries(columnsObject).filter(([el, column]) => {
        //@ts-ignore
        const { code, value } = column;

        if (code === 'id' && value === ID) {
          defaultArray.push(ID);
        }
      });
    });
  });//@ts-ignore
  return defaultArray;
};

// собираем config  const [config, setConfig] = useState(
// @ts-ignore
export const getConfig = ({ topBar, bottomBar }) => {
  let temp = {
    sort_by: null,
    sort_direction: null,
    page: null,
    per_page: null,
  };

  if (topBar) {
    // сортировка
    const isSortableColumn = Object.entries(topBar).filter(
      //@ts-ignore
      ([code, { isSort }]) => {
        return isSort === true;
      }
    );

    if (isSortableColumn.length) {
      //@ts-ignore
      const { code, sortDirection } = isSortableColumn[0][1];
      temp = {
        ...temp,
        sort_by: code,
        sort_direction: sortDirection,
      };
    }
  }

  // пагинация
  if (!!bottomBar && !!bottomBar.pagination) {
    const { activePage, activePerPage } = bottomBar.pagination;
    temp = {
      ...temp,
      page: activePage,
      per_page: activePerPage,
    };
  }

  return temp;
};

// изменить сортировку и получить новый config. (по возрастанию/убыванию)
//@ts-ignore
export const getNewConfigChangeSort = ({ code, config }) => {
  let newConfig = {};

  if (config.sort_by === code && config.sort_direction === 'asc') {
    newConfig = {
      ...config,
      sort_by: code,
      sort_direction: 'desc',
      page: null,
    };
  } else {
    newConfig = {
      ...config,
      sort_by: code,
      sort_direction: 'asc',
      page: null,
    };
  }

  return newConfig;
};
