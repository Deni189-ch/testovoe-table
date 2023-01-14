// собираем новый массив с id или productId
//@ts-ignore
export const getDefaultValueArrayCheckbox = (items, id) => {
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
export const getConfig = ({ topBar }) => {
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

  return temp;
};