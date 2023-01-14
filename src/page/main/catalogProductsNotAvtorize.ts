//frontend3.tbm.hb-dev.ru/api/v1/catalog/favorites  //GET

const DATA = {
  status: true,
  data: {
    table: {
      actionBar: {
        totalCount: {
          count: 1,
        },
        selectItems: [
          {
            title: 'Удалить',
            code: 'delete',
            icon: null,
            method: 'DELETE',
            action: 'http://frontend3.tbm.hb-dev.ru/api/v1/catalog/favorites',
            fieldsToAction: ['id'],
          },
          {
            title: 'Добавить в корзину',
            code: 'basket',
            icon: null,
            method: 'POST',
            action: 'http://frontend3.tbm.hb-dev.ru/api/v1/basket',
            fieldsToAction: ['productId'],
          },
        ],
        search: {
          placeholder: 'Введите артикул или название',
          query: '',
        },
        miniBasket: {
          icon: 'basket',
          title: 'В корзине:',
          text: '1 избранный товар на 44100₽',
        },
      },
      bottomBar: {
        pagination: {
          pages: [1],
          activePage: 1,
          activePerPage: 200,
          isLastPage: true,
          perPage: [20, 40, 80],
          allCount: 1,
        },
      },
      topBar: {
        number: {
          code: 'number',
          title: '№',
          canSort: false,
          hint: null,
        },
        use: {
          code: 'use',
          title: '',
          canSort: false,
          hint: null,
        },
        mainImage: {
          code: 'mainImage',
          title: 'Фото',
          canSort: false,
          hint: null,
        },
        name: {
          code: 'name',
          title: 'Название',
          canSort: true,
          hint: null,
          sortDirection: null,
          isSort: false,
        },
        art: {
          code: 'art',
          title: 'Артикул',
          canSort: true,
          hint: null,
          sortDirection: null,
          isSort: false,
        },
        'price.price': {
          code: 'price.price',
          title: 'Цена',
          canSort: true,
          hint: null,
          sortDirection: null,
          isSort: false,
        },
        norm_otp: {
          code: 'norm_otp',
          title: 'Кратность объема',
          canSort: false,
          hint: 'Количество товара которое можно покупать за 1 раз',
        },
        counter: {
          code: 'counter',
          title: 'В корзину',
          canSort: false,
          hint: null,
          method: 'PUT',
          action:
            'http://frontend3.tbm.hb-dev.ru/api/v1/basket/product/{productId}',
          fieldsToAction: ['productId', 'counter'],
        },
        total: {
          code: 'total',
          title: 'Стоимость',
          canSort: false,
          hint: null,
        },
        delete: {
          code: 'delete',
          title: null,
          canSort: false,
          hint: null,
          method: 'DELETE',
          action:
            'http://frontend3.tbm.hb-dev.ru/api/v1/catalog/favorites/{id}',
          fieldsToAction: ['id'],
        },
      },
      customActions: {
        allToBasket: {
          code: 'allToBasket',
          title: 'Добавить все в корзину (1)',
          hint: null,
          method: 'POST',
          action:
            'http://frontend3.tbm.hb-dev.ru/api/v1/list/favorites/add-to-basket',
        },
      },
      items: [
        {
          number: {
            code: 'number',
            type: 'text',
            value: 1,
          },
          use: {
            code: 'use',
            type: 'checkbox',
            value: false,
          },
          mainImage: {
            code: 'mainImage',
            type: 'image',
            value: [
              {
                id: 1690,
                name: 'e909260b347c4ef5c7fd46e9476500bffce49aea',
                path: '/catalog/OA78a85FZByRxsQj7ry8.jpg.jpg',
                disk: 'public',
                mime: '',
                created_at: '2021-06-29T09:57:38.000000Z',
                updated_at: '2021-06-29T09:57:38.000000Z',
                alt: null,
                description: null,
                is_default: false,
                preview_id: null,
                is_tmp: false,
                url:
                  'http://frontend3.tbm.hb-dev.ru/storage/catalog/OA78a85FZByRxsQj7ry8.jpg.jpg',
                pivot: {
                  product_id: '-10000985669406000',
                  attachment_id: 1690,
                },
              },
            ],
          },
          name: {
            code: 'name',
            type: 'text',
            value: 'Подоконник пластиковый BAUSET МПР-40 /350/ белый /6,0м/',
            link:
              '/catalog/everything-for-windows/moeller-window-sills/podokonnik-plastikovy-j-bauset-mpr-40-350-bely-j-6-0m-ros5145-07-6',
          },
          art: {
            code: 'art',
            type: 'text',
            value: 'ROS5145.07/6',
          },
          'price.price': {
            code: 'price.price',
            type: 'price',
            value: 403,
            currency: '₽',
            oldPrice: 0,
          },
          norm_otp: {
            code: 'norm_otp',
            type: 'text',
            value: 'Кратно 6',
          },
          counter: {
            code: 'counter',
            type: 'counter',
            value: 21,
            min: 1,
            step: 1,
          },
          total: {
            code: 'total',
            type: 'totalCount',
            value: 8463,
            countField: 'counter',
            numberField: 'price',
            symbol: '₽',
          },
          delete: {
            code: 'delete',
            type: 'action',
            icon: 'delete',
            disable: false,
          },
          id: {
            code: 'id',
            type: 'hidden',
            value: 1304,
          },
          productId: {
            code: 'productId',
            type: 'hidden',
            value: -10000985669406000,
          },
        },
        {
          number: {
            code: 'number',
            type: 'text',
            value: 1,
          },
          use: {
            code: 'use',
            type: 'checkbox',
            value: false,
          },
          mainImage: {
            code: 'mainImage',
            type: 'image',
            value: [
              {
                id: 1690,
                name: 'e909260b347c4ef5c7fd46e9476500bffce49aea',
                path: '/catalog/OA78a85FZByRxsQj7ry8.jpg.jpg',
                disk: 'public',
                mime: '',
                created_at: '2021-06-29T09:57:38.000000Z',
                updated_at: '2021-06-29T09:57:38.000000Z',
                alt: null,
                description: null,
                is_default: false,
                preview_id: null,
                is_tmp: false,
                url:
                  'http://frontend3.tbm.hb-dev.ru/storage/catalog/OA78a85FZByRxsQj7ry8.jpg.jpg',
                pivot: {
                  product_id: '-10000985669406000',
                  attachment_id: 1690,
                },
              },
            ],
          },
          name: {
            code: 'name',
            type: 'text',
            value: 'Подоконник пластиковый BAUSET МПР-40 /350/ белый /6,0м/',
            link:
              '/catalog/everything-for-windows/moeller-window-sills/podokonnik-plastikovy-j-bauset-mpr-40-350-bely-j-6-0m-ros5145-07-6',
          },
          art: {
            code: 'art',
            type: 'text',
            value: 'ROS5145.07/6',
          },
          'price.price': {
            code: 'price.price',
            type: 'price',
            value: 403,
            currency: '₽',
            oldPrice: 0,
          },
          norm_otp: {
            code: 'norm_otp',
            type: 'text',
            value: 'Кратно 6',
          },
          counter: {
            code: 'counter',
            type: 'counter',
            value: 21,
            min: 1,
            step: 1,
          },
          total: {
            code: 'total',
            type: 'totalCount',
            value: 8463,
            countField: 'counter',
            numberField: 'price',
            symbol: '₽',
          },
          delete: {
            code: 'delete',
            type: 'action',
            icon: 'delete',
            disable: false,
          },
          id: {
            code: 'id',
            type: 'hidden',
            value: 1304,
          },
          productId: {
            code: 'productId',
            type: 'hidden',
            value: -10000985669406000,
          },
        },
        {
          number: {
            code: 'number',
            type: 'text',
            value: 1,
          },
          use: {
            code: 'use',
            type: 'checkbox',
            value: false,
          },
          mainImage: {
            code: 'mainImage',
            type: 'image',
            value: [
              {
                id: 1690,
                name: 'e909260b347c4ef5c7fd46e9476500bffce49aea',
                path: '/catalog/OA78a85FZByRxsQj7ry8.jpg.jpg',
                disk: 'public',
                mime: '',
                created_at: '2021-06-29T09:57:38.000000Z',
                updated_at: '2021-06-29T09:57:38.000000Z',
                alt: null,
                description: null,
                is_default: false,
                preview_id: null,
                is_tmp: false,
                url:
                  'http://frontend3.tbm.hb-dev.ru/storage/catalog/OA78a85FZByRxsQj7ry8.jpg.jpg',
                pivot: {
                  product_id: '-10000985669406000',
                  attachment_id: 1690,
                },
              },
            ],
          },
          name: {
            code: 'name',
            type: 'text',
            value: 'Подоконник пластиковый BAUSET МПР-40 /350/ белый /6,0м/',
            link:
              '/catalog/everything-for-windows/moeller-window-sills/podokonnik-plastikovy-j-bauset-mpr-40-350-bely-j-6-0m-ros5145-07-6',
          },
          art: {
            code: 'art',
            type: 'text',
            value: 'ROS5145.07/6',
          },
          'price.price': {
            code: 'price.price',
            type: 'price',
            value: 403,
            currency: '₽',
            oldPrice: 0,
          },
          norm_otp: {
            code: 'norm_otp',
            type: 'text',
            value: 'Кратно 6',
          },
          counter: {
            code: 'counter',
            type: 'counter',
            value: 21,
            min: 1,
            step: 1,
          },
          total: {
            code: 'total',
            type: 'totalCount',
            value: 8463,
            countField: 'counter',
            numberField: 'price',
            symbol: '₽',
          },
          delete: {
            code: 'delete',
            type: 'action',
            icon: 'delete',
            disable: false,
          },
          id: {
            code: 'id',
            type: 'hidden',
            value: 1304,
          },
          productId: {
            code: 'productId',
            type: 'hidden',
            value: -10000985669406000,
          },
        },
      ],
    },
    filterConstructor: [],
    breadcrumbs: [
      {
        id: 0,
        name: 'Главная',
        path: '/',
      },
      {
        id: 1,
        name: 'Избранное',
        path: '/',
      },
    ],
  },
  message: 'Запрос успешно выполнен',
};

const CATALOG_PRODUCTS = {
  status: true,
  data: {
    breadcrumbs: [
      {
        id: 0,
        name: 'Главная',
        path: '/',
      },
      {
        id: 1,
        name: 'Избранное',
        path: '/',
      },
    ],
    actionBar: {
      totalCount: {
        count: null, //13
      },
      selectItems: [
        {
          title: 'Удалить',
          code: 'delete',
          icon: null,
          method: 'DELETE',
          action: 'http://frontend2.tbm.hb-dev.ru/api/v1/basket',
          fieldsToAction: ['id'],
        },
        {
          title: 'Добавить в избранное',
          code: 'favorite',
          icon: null,
          method: 'POST',
          action: 'http://frontend2.tbm.hb-dev.ru/api/v1/list/favorites/',
          fieldsToAction: ['product_id'],
        },
      ],
      search: {
        placeholder: 'Введите артикул или название',
        query: false,
      },
      miniBasket: {
        icon: 'basket',
        title: 'В корзине:',
        text: '0 избранных товаров на 0₽',
      },
    },
    bottomBar: {
      pagination: {
        pages: [2, 3, 4],
        activePage: 2,
        activePerPage: 20,
        isLastPage: false,
        perPage: [20, 40, 80],
        allCount: 64,
      },
    },
    topBar: {
      number: {
        code: 'number',
        title: '№',
        canSort: true,
        hint: null,
        sortDirection: 'asc',
        isSort: true,
      },
      use: {
        code: 'use',
        title: '',
        canSort: false,
        hint: null,
      },
      mainImage: {
        code: 'mainImage',
        title: 'Фото',
        canSort: false,
        hint: null,
      },
      name: {
        code: 'name',
        title: 'Название',
        canSort: true,
        hint: null,
        sortDirection: null,
        isSort: false,
      },
      art: {
        code: 'art',
        title: 'Артикул',
        canSort: true,
        hint: null,
        sortDirection: null,
        isSort: false,
      },
      price: {
        code: 'price',
        title: 'Цена',
        canSort: true,
        hint: null,
        sortDirection: null,
        isSort: false,
      },
      norm_otp: {
        code: 'norm_otp',
        title: 'Кратность объема',
        canSort: false,
        hint: 'Количество товара которое можно покупать за 1 раз',
      },
      dimension: {
        code: 'dimension',
        title: 'Длина или объем',
        canSort: false,
        hint:
          'Параметры которые были сконфигурированы через специальный калькулятор',
      },
      counter: {
        code: 'counter',
        title: 'Количество, шт',
        canSort: false,
        hint: null,
        method: 'PUT',
        action: 'http://frontend2.tbm.hb-dev.ru/api/v1/basket/{id}',
        fieldsToAction: ['id', 'counter'],
      },
      // art: {
      //   code: 'art',
      //   title: 'Добавить в корзину',
      //   canSort: true,
      //   hint: null,
      //   sortDirection: null,
      //   isSort: false,
      // },
      total: {
        code: 'total',
        title: 'Стоимость',
        canSort: false,
        hint: null,
      },
      delete: {
        code: 'delete',
        title: null,
        canSort: false,
        hint: null,
        method: 'DELETE',
        action: 'http://frontend2.tbm.hb-dev.ru/api/v1/basket/{id}',
        fieldsToAction: ['id'],
      },
    },
    customActions: {
      allToBasket: {
        code: 'allToBasket',
        title: 'Добавить все в корзину (13)',
        hint: null,
        method: 'POST',
        action:
          'http://frontend3.tbm.hb-dev.ru/api/v1/list/favorites/add-to-basket',
      },
    },
    items: [
      {
        number: {
          code: 'number',
          type: 'text',
          value: null,
        },
        use: {
          code: 'use',
          type: 'checkbox',
          value: false,
        },
        mainImage: {
          code: 'mainImage',
          type: 'image',
          value: [
            {
              id: 10074,
              name: '66074338a832912d0b0427d961ea80357067e40f',
              path: '/catalog/p8NqcF0GcLBEELuT6FXp.jpg.jpg',
              disk: 'public',
              mime: '',
              created_at: '2021-06-29T10:12:18.000000Z',
              updated_at: '2021-06-29T10:12:18.000000Z',
              alt: null,
              description: null,
              is_default: false,
              preview_id: null,
              is_tmp: false,
              url: '/images/content/catalog/product-5.png',
              pivot: {
                product_id: '-20000941037206000',
                attachment_id: 10074,
              },
            },
          ],
          link:
            '/catalog/everything-for-windows/accessories/category_test/test2/test14/mikrovolnovka-vstraivaemaya-bimo-20-01-ivory-light-bely-j-antik-lex-mw20-01-03',
        },
        name: {
          code: 'name',
          type: 'text',
          value:
            'Микроволновка встраиваемая BIMO 20.01 IVORY LIGHT, белый антик',
          link:
            '/catalog/everything-for-windows/accessories/category_test/test2/test14/mikrovolnovka-vstraivaemaya-bimo-20-01-ivory-light-bely-j-antik-lex-mw20-01-03',
          subCols: {
            art: {
              code: 'art',
              type: 'text',
              value: 'артикул',
            },
          },
        },
        art: {
          code: 'art',
          type: 'text',
          value: 'LEX.MW20.01.03',
        },
        price: {
          code: 'price',
          type: 'price',
          value: 20890,
          currency: '₽',
          oldPrice: 0,
        },
        norm_otp: {
          code: 'norm_otp',
          type: 'text',
          value: 1,
        },
        dimension: {
          code: 'dimension',
          type: 'text',
          value: '',
        },
        counter: {
          code: 'counter',
          type: 'counter',
          value: 2,
          min: 1,
          step: 1,
        },
        total: {
          code: 'total',
          type: 'totalCount',
          value: 41780,
          countField: 'counter',
          numberField: 'price',
          symbol: '₽',
        },
        delete: {
          code: 'delete',
          type: 'action',
          icon: 'delete',
          disable: false,
        },
        id: {
          code: 'id',
          type: 'hidden',
          value: 150,
        },
        productId: {
          code: 'productId',
          type: 'hidden',
          value: -20000941037206000,
        },
      },
      {
        number: {
          code: 'number',
          type: 'text',
          value: null,
        },
        use: {
          code: 'use',
          type: 'checkbox',
          value: false,
        },
        mainImage: {
          code: 'mainImage',
          type: 'image',
          value: [
            {
              id: 13176,
              name: '0e21c604bcb07896778e832cc331ecdd2cf609a8',
              path: '/catalog/519vXKM7RvkW9veGbZAQ.jpg.jpg',
              disk: 'public',
              mime: '',
              created_at: '2021-06-29T10:18:09.000000Z',
              updated_at: '2021-06-29T10:18:09.000000Z',
              alt: null,
              description: null,
              is_default: false,
              preview_id: null,
              is_tmp: false,
              url:
                'http://frontend2.tbm.hb-dev.ru/storage/catalog/519vXKM7RvkW9veGbZAQ.jpg.jpg',
              pivot: {
                product_id: '-20000933824006000',
                attachment_id: 13176,
              },
            },
          ],
          link:
            '/catalog/everything-for-windows/accessories/category_test/test2/test12/stenovaya-panel-f148-st82-valentino-glina-3000-600-6-mm-fis0011-16',
        },
        name: {
          code: 'name',
          type: 'text',
          value: 'Стеновая панель F148 ST82 Валентино глина, 3000х600х6 мм',
          link:
            '/catalog/everything-for-windows/accessories/category_test/test2/test12/stenovaya-panel-f148-st82-valentino-glina-3000-600-6-mm-fis0011-16',
          subCols: {
            art: {
              code: 'art',
              type: 'text',
              value: 'артикул',
            },
          },
        },
        art: {
          code: 'art',
          type: 'text',
          value: 'FIS0011/16',
        },
        price: {
          code: 'price',
          type: 'price',
          value: 3177,
          currency: '₽',
          oldPrice: 0,
        },
        norm_otp: {
          code: 'norm_otp',
          type: 'text',
          value: 1,
        },
        dimension: {
          code: 'dimension',
          type: 'text',
          value: '',
        },
        counter: {
          code: 'counter',
          type: 'counter',
          value: 2,
          min: 1,
          step: 1,
        },
        total: {
          code: 'total',
          type: 'totalCount',
          value: 6354,
          countField: 'counter',
          numberField: 'price',
          symbol: '₽',
        },
        delete: {
          code: 'delete',
          type: 'action',
          icon: 'delete',
          disable: false,
        },
        id: {
          code: 'id',
          type: 'hidden',
          value: 157,
        },
        productId: {
          code: 'productId',
          type: 'hidden',
          value: -20000933824006000,
        },
      },
      {
        number: {
          code: 'number',
          type: 'text',
          value: null,
        },
        use: {
          code: 'use',
          type: 'checkbox',
          value: false,
        },
        mainImage: {
          code: 'mainImage',
          type: 'image',
          value: [
            {
              id: 4812,
              name: 'ecedd4d8533cc8266abc365e7e99fe8715ca72c1',
              path: '/catalog/XWgclDX32BhtVoFPWR9a.jpg.jpg',
              disk: 'public',
              mime: '',
              created_at: '2021-06-29T10:03:02.000000Z',
              updated_at: '2021-06-29T10:03:02.000000Z',
              alt: null,
              description: null,
              is_default: false,
              preview_id: null,
              is_tmp: false,
              url:
                'http://frontend2.tbm.hb-dev.ru/storage/catalog/XWgclDX32BhtVoFPWR9a.jpg.jpg',
              pivot: {
                product_id: '-9986554',
                attachment_id: 4812,
              },
            },
          ],
          link:
            '/catalog/everything-for-windows/accessories/category_test/test7/lak-vodny-j-hesse-he-65414-parketny-j-b-cv-p-mat-n-u-5l-hsa5405',
        },
        name: {
          code: 'name',
          type: 'text',
          value: 'Лак водный Hesse HE 65414 паркетный б/цв., п/мат., н.у.5л',
          link:
            '/catalog/everything-for-windows/accessories/category_test/test7/lak-vodny-j-hesse-he-65414-parketny-j-b-cv-p-mat-n-u-5l-hsa5405',
          subCols: {
            art: {
              code: 'art',
              type: 'text',
              value: 'артикул',
            },
          },
        },
        art: {
          code: 'art',
          type: 'text',
          value: 'HSA5405',
        },
        price: {
          code: 'price',
          type: 'price',
          value: null,
          currency: '₽',
          oldPrice: 0,
        },
        norm_otp: {
          code: 'norm_otp',
          type: 'text',
          value: 'Кратно 5',
        },
        dimension: {
          code: 'dimension',
          type: 'text',
          value: '',
        },
        counter: {
          code: 'counter',
          type: 'counter',
          value: 0,
          min: 1,
          step: 1,
        },
        total: {
          code: 'total',
          type: 'totalCount',
          value: 67300,
          countField: 'counter',
          numberField: 'price',
          symbol: '₽',
        },
        delete: {
          code: 'delete',
          type: 'action',
          icon: 'delete',
          disable: false,
        },
        id: {
          code: 'id',
          type: 'hidden',
          value: 155,
        },
        productId: {
          code: 'productId',
          type: 'hidden',
          value: -9986554,
        },
      },
      {
        number: {
          code: 'number',
          type: 'text',
          value: null,
        },
        use: {
          code: 'use',
          type: 'checkbox',
          value: false,
        },
        mainImage: {
          code: 'mainImage',
          type: 'image',
          value: [
            {
              id: 10464,
              name: 'e2b566c62afb4841c16903ada6746d9ad54023dc',
              path: '/catalog/jAVWYfaMXRy2s7iASWbK.jpg.jpg',
              disk: 'public',
              mime: '',
              created_at: '2021-06-29T10:13:05.000000Z',
              updated_at: '2021-06-29T10:13:05.000000Z',
              alt: null,
              description: null,
              is_default: false,
              preview_id: null,
              is_tmp: false,
              url:
                'http://frontend2.tbm.hb-dev.ru/storage/catalog/jAVWYfaMXRy2s7iASWbK.jpg.jpg',
              pivot: {
                product_id: '-20000940421306000',
                attachment_id: 10464,
              },
            },
          ],
          link:
            '/catalog/everything-for-windows/accessories/category_test/test2/test13/kr-45-klyuch-regulirovochny-j-dlya-mebel-ny-opor-msh0045',
        },
        name: {
          code: 'name',
          type: 'text',
          value: 'КР-45, Ключ регулировочный, для мебельных опор.',
          link:
            '/catalog/everything-for-windows/accessories/category_test/test2/test13/kr-45-klyuch-regulirovochny-j-dlya-mebel-ny-opor-msh0045',
          subCols: {
            art: {
              code: 'art',
              type: 'text',
              value: 'артикул',
            },
          },
        },
        art: {
          code: 'art',
          type: 'text',
          value: 'MSH0045',
        },
        price: {
          code: 'price',
          type: 'price',
          value: 407,
          currency: '₽',
          oldPrice: 0,
        },
        norm_otp: {
          code: 'norm_otp',
          type: 'text',
          value: 1,
        },
        dimension: {
          code: 'dimension',
          type: 'text',
          value: '',
        },
        counter: {
          code: 'counter',
          type: 'counter',
          value: 2,
          min: 1,
          step: 1,
        },
        total: {
          code: 'total',
          type: 'totalCount',
          value: 814,
          countField: 'counter',
          numberField: 'price',
          symbol: '₽',
        },
        delete: {
          code: 'delete',
          type: 'action',
          icon: 'delete',
          disable: false,
        },
        id: {
          code: 'id',
          type: 'hidden',
          value: 158,
        },
        productId: {
          code: 'productId',
          type: 'hidden',
          value: -20000940421306000,
        },
      },
      {
        number: {
          code: 'number',
          type: 'text',
          value: null,
        },
        use: {
          code: 'use',
          type: 'checkbox',
          value: false,
        },
        mainImage: {
          code: 'mainImage',
          type: 'image',
          value: [
            {
              id: 18837,
              name: 'ded34ab90f864356a94c3b9603fbcc41799188d4',
              path: '/catalog/K3N749CfnalQuLWAjnJf.jpg.jpg',
              disk: 'public',
              mime: '',
              created_at: '2021-06-29T10:28:39.000000Z',
              updated_at: '2021-06-29T10:28:39.000000Z',
              alt: null,
              description: null,
              is_default: false,
              preview_id: null,
              is_tmp: false,
              url:
                'http://frontend2.tbm.hb-dev.ru/storage/catalog/K3N749CfnalQuLWAjnJf.jpg.jpg',
              pivot: {
                product_id: '-13000983270406000',
                attachment_id: 18837,
              },
            },
          ],
          link:
            '/catalog/everything-for-windows/accessories/category_test/test3/plita-mdf-alvic-luxe-1220-18-2750-mm-glyanec-bordo-metallik-burdeos-pearl-effect-alv0123',
        },
        name: {
          code: 'name',
          type: 'text',
          value:
            'Плита МДФ ALVIC LUXE 1220*18*2750 мм, глянец бордо металлик (Burdeos Pearl Effect)',
          link:
            '/catalog/everything-for-windows/accessories/category_test/test3/plita-mdf-alvic-luxe-1220-18-2750-mm-glyanec-bordo-metallik-burdeos-pearl-effect-alv0123',
          subCols: {
            art: {
              code: 'art',
              type: 'text',
              value: 'артикул',
            },
          },
        },
        art: {
          code: 'art',
          type: 'text',
          value: 'ALV0123',
        },
        price: {
          code: 'price',
          type: 'price',
          value: 9684,
          currency: '₽',
          oldPrice: 20387,
        },
        norm_otp: {
          code: 'norm_otp',
          type: 'text',
          value: 'кратно 1111',
        },
        dimension: {
          code: 'dimension',
          type: 'text',
          value: '',
        },
        counter: {
          code: 'counter',
          type: 'counter',
          value: 2,
          min: 1,
          step: 1,
        },
        total: {
          code: 'total',
          type: 'totalCount',
          value: 19368,
          countField: 'counter',
          numberField: 'price',
          symbol: '₽',
        },
        delete: {
          code: 'delete',
          type: 'action',
          icon: 'delete',
          disable: false,
        },
        id: {
          code: 'id',
          type: 'hidden',
          value: 154,
        },
        productId: {
          code: 'productId',
          type: 'hidden',
          value: -13000983270406000,
        },
      },
    ],
    filterConstructor: [
      {
        title: 'Цена',
        name: 'price',
        type: 'range',
        measures: {
          min: 379,
          max: 1254,
          minValue: null,
          maxValue: null,
          unit: '₽',
        },
      },
      {
        name: 'categories',
        type: 'simple-checkboxes',
        notScrollable: true,
        moreLabel: 'Все разделы',
        childs: [
          {
            value: 24,
            label: 'Подоконники Moeller',
            isActive: false,
            amount: 5,
            disable: false,
            image: {
              alt: '',
              path: '',
              title: '',
            },
          },
          {
            value: 3,
            label: 'Тестовая категория',
            isActive: false,
            amount: 1,
            disable: false,
            image: {
              alt: '',
              path: '',
              title: '',
            },
          },
          {
            value: 26,
            label: 'Тестовая подкатегория 2',
            isActive: false,
            amount: 2,
            disable: false,
            image: {
              alt: '',
              path: '',
              title: '',
            },
          },
          {
            value: 40,
            label: 'Тестовая подкатегория 16',
            isActive: false,
            amount: 2,
            disable: false,
            image: {
              alt: '',
              path: '',
              title: '',
            },
          },
          {
            value: 1,
            label: 'Все для окон',
            isActive: false,
            amount: 1,
            disable: true,
            image: {
              alt: '',
              path: '',
              title: '',
            },
          },
          {
            value: 34,
            label: 'Тестовая подкатегория 10',
            isActive: false,
            amount: 1,
            disable: false,
            image: {
              alt: '',
              path: '',
              title: '',
            },
          },
          {
            value: 37,
            label: 'Тестовая подкатегория 13',
            isActive: false,
            amount: 1,
            disable: false,
            image: {
              alt: '',
              path: '',
              title: '',
            },
          },
          {
            value: 1,
            label: 'Все для окон',
            isActive: false,
            amount: 1,
            disable: true,
            image: {
              alt: '',
              path: '',
              title: '',
            },
          },
        ],
      },
      {
        title: 'Цвет',
        name: 'color',
        type: 'colors',
        searchable: true,
        resetable: false,
        notScrollable: false,
        moreLabel: 'Все цвета',
        hasExcludeCheckbox: false,
        childs: [
          {
            value: '1',
            label: 'Неокрашенный',
            isActive: false,
            amount: 2,
            disable: false,
            image: {
              alt: '',
              description: '',
              path: '',
            },
          },
          {
            value: '10',
            label: 'Никелированный',
            isActive: false,
            amount: 2,
            disable: false,
            image: {
              alt: '',
              description: '',
              path: '',
            },
          },
          {
            value: '11',
            label: 'Серебристый',
            isActive: false,
            amount: 2,
            disable: false,
            image: {
              alt: '',
              description: '',
              path:
                'http://frontend3.tbm.hb-dev.ru/storage/catalog/phpTRKpfK.png',
            },
          },
          {
            value: '22',
            label: 'Бежевый',
            isActive: false,
            amount: 2,
            disable: false,
            image: {
              alt: '',
              description: '',
              path: '',
            },
          },
          {
            value: '8',
            label: 'Алюминиевый',
            isActive: false,
            amount: 1,
            disable: false,
            image: {
              alt: '',
              description: '',
              path: '',
            },
          },
          {
            value: '28',
            label: 'Бесцветный',
            isActive: false,
            amount: 1,
            disable: false,
            image: {
              alt: '',
              description: '',
              path: '',
            },
          },
          {
            value: '84',
            label: 'Оранжевый',
            isActive: false,
            amount: 1,
            disable: false,
            image: {
              alt: '',
              description: '',
              path: '',
            },
          },
          {
            value: '123',
            label: 'Титан-серебро',
            isActive: false,
            amount: 1,
            disable: false,
            image: {
              alt: '',
              description: '',
              path: '',
            },
          },
        ],
      },
      {
        title: 'Торговая марка',
        name: 'trademark',
        type: 'checkboxes',
        childs: [
          {
            value: '18000000252706000',
            label: 'Kaba',
            isActive: false,
            amount: 2,
            disable: false,
          },
          {
            value: '22',
            label: 'SIEGENIA',
            isActive: false,
            amount: 1,
            disable: false,
          },
          {
            value: '59',
            label: 'KLEIBERIT',
            isActive: false,
            amount: 1,
            disable: false,
          },
          {
            value: '3000000026505000',
            label: 'KADMAR',
            isActive: false,
            amount: 1,
            disable: false,
          },
          {
            value: '5000000052106000',
            label: 'FIRMAX',
            isActive: false,
            amount: 1,
            disable: false,
          },
          {
            value: '6000000064506000',
            label: 'VORNE',
            isActive: false,
            amount: 1,
            disable: false,
          },
          {
            value: '7000000074406000',
            label: 'ELEMENTIS',
            isActive: false,
            amount: 1,
            disable: false,
          },
          {
            value: '8000000083706000',
            label: 'Алюминий техно (РБ)',
            isActive: false,
            amount: 1,
            disable: false,
          },
          {
            value: '17000000233006000',
            label: 'Winkhaus',
            isActive: false,
            amount: 1,
            disable: false,
          },
          {
            value: '17000000233506000',
            label: 'Черон',
            isActive: false,
            amount: 1,
            disable: false,
          },
          {
            value: '17000000241706000',
            label: 'ICSAM',
            isActive: false,
            amount: 1,
            disable: false,
          },
        ],
        searchable: true,
        resetable: true,
        notScrollable: false,
        hint: 'Подсказка, которая должна отображаться',
        hasExcludeCheckbox: true,
        isExclude: false,
      },
      {
        title: 'Длина, см',
        name: 'length-sm',
        type: 'range',
        measures: {
          min: 600,
          max: 1500,
          minValue: null,
          maxValue: null,
          unit: 'см',
        },
      },
      {
        title: 'Наличие цены',
        name: 'available-and-price',
        type: 'checkboxes',
        childs: [
          {
            value: 'only-price',
            label: 'Только с ценой',
            isActive: false,
            amount: 3,
            disable: false,
          },
        ],
        notScrollable: true,
        isExclude: false,
      },
    ],
  },
  message: 'Запрос успешно выполнен',
};
//@ts-ignore
export default (req, res) => {
  res.status(200).json({ ...DATA });
};
