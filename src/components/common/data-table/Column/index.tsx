import React from 'react';

import {CheckBoxColumn} from './CheckBoxColumn';
import {ImagesColumn} from './ImagesColumn';
import {TextColumn} from './TextColumn';
import {BtnColumn} from './BtnColumn';

const columnComponentByType = {
  checkbox: CheckBoxColumn,
  image: ImagesColumn,
  text: TextColumn,
  btn: BtnColumn,
};

const Column: React.FC = ({ code, data, config, classes }: any) => {
  const { type } = data;

  // @ts-ignore
  if (!columnComponentByType[type]) return null;

  // @ts-ignore
  const ColumnComponent = columnComponentByType[type];
  return (
    <ColumnComponent
      classes={classes}
      config={config}
      type={type}
      code={code}
      data={data}
    />
  );
};

export default Column;
