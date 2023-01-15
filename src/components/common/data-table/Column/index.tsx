import React from 'react';

import {CheckBoxColumn} from './CheckBoxColumn';
import {ImagesColumn} from './ImagesColumn';
import {TextColumn} from './TextColumn';
import {BtnColumn} from './BtnColumn';

import {ColumnType} from './types';

const columnComponentByType = {
  checkbox: CheckBoxColumn,
  image: ImagesColumn,
  text: TextColumn,
  btn: BtnColumn,
};


const Column: React.FC<ColumnType> = ({code, data}) => {
  const {type} = data;
  // @ts-ignore
  if (!!type && !columnComponentByType[type]) return null;

  // @ts-ignore
  const ColumnComponent = columnComponentByType[type];
  return (
    <ColumnComponent
      type={type}
      code={code}
      data={data}
    />
  );
};

export default Column;
