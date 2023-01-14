export type cellType = {
  code: string,
  type?: string
  title?: string
  value?: string | boolean
  id?: string
}
export type columnsCellType = {
    use: cellType
    number: cellType
    mainImage: cellType
    description: cellType
    name: cellType
    vendor_code: cellType
    price: cellType
    volume_multiplicity: cellType
    status?: cellType
    btn: cellType
    test?: cellType
    id: cellType
}
export type columnsType = {
  columns: columnsCellType
}
export type topBarType = {
  checkbox: cellType
  number: cellType
  mainImage: cellType
  description: cellType
  name: cellType
  art: cellType
  price: cellType
  norm_otp: cellType
  test: cellType
  total: cellType
}
export type actionBarType = {
  search: {
    placeholder: string
  }
}
export type tableType = {
  topBar: topBarType,
  items: Array<columnsType>
  actionBar: actionBarType
}
export type dataType = {
  table: tableType
}
export type getMockData = {
  data: dataType,
}

export const getMockData: getMockData = {
  data: {
    table: {
      topBar: {
        checkbox: {
          code: 'checkbox',
          type: 'hidden',
        },
        number: {
          code: 'number',
          title: '№',
        },
        mainImage: {
          code: 'mainImage',
          title: 'Фото',
        },
        description: {
          code: 'description',
          title: 'Описание',
        },
        name: {
          code: 'name',
          title: 'Название',
        },
        art: {
          code: 'art',
          title: 'Артикул',
        },
        price: {
          code: 'price',
          title: 'Цена',
        },
        norm_otp: {
          code: 'norm_otp',
          title: 'Кратность объема',
        },
        test: {
          code: 'test',
          title: 'test',
        },
        total: {
          code: 'total',
          title: 'Купить',
        },
      },
      items: [
        {
          columns: {
            use: {
              code: 'use',
              type: 'checkbox',
              value: false,
            },
            number: {
              code: 'number',
              type: 'text',
              value: '27677',
            },
            mainImage: {
              code: 'mainImage',
              type: 'image',
              value: 'image',
            },
            description: {
              code: 'description',
              type: 'text',
              value: 'Лучшие ноутбуки линейки производителя, хорошее решение для учебы, работы и отдыха. Информацию об условиях отпуска (реализации) уточняйте у продавца.\n' +
                '\n' +
                'Информация о технических характеристиках, комплекте поставки, стране изготовления и внешнем виде товара носит справочный характер.\n' +
                '\n' +
                'Стоимость доставки из других регионов приблизительная. Точную стоимость уточняйте у продавца.\n' +
                '\n' +
                'Товары в разделе «Вместе с этим покупают» подобраны автоматически. Совместимость товаров уточняйте у продавца или производителя.\n' +
                '\n' +
                'Ежемесячный платеж является приблизительным или рассчитан автоматически на основе предоставленной продавцом информации. Подробные условия покупки товаров в кредит, полную стоимость кредита и другие условия кредитования уточняйте на сайте продавца.',
            },
            name: {
              code: 'name',
              type: 'text',
              value: 'samsung G 20',
            },
            vendor_code: {
              code: 'vendor_code',
              type: 'text',
              value: '#1234-12',
            },
            price: {
              code: 'price',
              type: 'text',
              value: '52.000 руб',
            },
            volume_multiplicity: {
              code: 'volume_multiplicity',
              type: 'text',
              value: '4 шт',
            },
            status: {
              code: 'status',
              type: 'text',
              value: 'test',
            },
            btn: {
              code: 'btn',
              type: 'btn',
              value: 'Купить',
              id: 'id № 80'
            },
            id: {
              code: 'id',
              type: 'hidden',
              value: '80',
            },
          },
        },
        {
          columns: {
            use: {
              code: 'use',
              type: 'checkbox',
              value: false,
            },
            number: {
              code: 'number',
              type: 'text',
              value: '27687',
            },
            mainImage: {
              code: 'mainImage',
              type: 'image',
              value: 'image',
            },
            description: {
              code: 'description',
              type: 'text',
              value: 'Лучшие ноутбуки линейки производителя, хорошее решение для учебы, работы и отдыха. Информацию об условиях отпуска (реализации) уточняйте у продавца.\n' +
                '\n' +
                'Информация о технических характеристиках, комплекте поставки, стране изготовления и внешнем виде товара носит справочный характер.\n' +
                '\n' +
                'Стоимость доставки из других регионов приблизительная. Точную стоимость уточняйте у продавца.\n' +
                '\n' +
                'Товары в разделе «Вместе с этим покупают» подобраны автоматически. Совместимость товаров уточняйте у продавца или производителя.\n' +
                '\n' +
                'Ежемесячный платеж является приблизительным или рассчитан автоматически на основе предоставленной продавцом информации. Подробные условия покупки товаров в кредит, полную стоимость кредита и другие условия кредитования уточняйте на сайте продавца.',
            },
            name: {
              code: 'name',
              type: 'text',
              value: 'laptop asus cor i5',
            },
            vendor_code: {
              code: 'vendor_code',
              type: 'text',
              value: '#1234-13',
            },
            price: {
              code: 'price',
              type: 'text',
              value: '50.000 руб',
            },
            volume_multiplicity: {
              code: 'volume_multiplicity',
              type: 'text',
              value: '12 шт',
            },
            test: {
              code: 'test',
              type: 'text',
              value: 'test',
            },
            btn: {
              code: 'btn',
              type: 'btn',
              value: 'Купить',
              id: 'id № 79'
            },
            id: {
              code: 'id',
              type: 'hidden',
              value: '79',
            },
          },
        },
      ],
      actionBar: {
        search: {
          placeholder: 'Введите артикул или название',
        },
      },
    },
  },
};