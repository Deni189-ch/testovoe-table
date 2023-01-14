import React from 'react';
import ShowMoreText from "react-show-more-text";

import style from './text-column.module.scss';

export const TextColumn = ({ data: { value }}: any) => {

   return (
    <div>
      <ShowMoreText
        lines={4}
        more="show more"
        less="show less"
        className={style.show_more_text}
        anchorClass={style.show_more_less_clickable}
        expanded={false}
        width={100}
        truncatedEndingComponent="... "
      >
        {!!value && value}
      </ShowMoreText>
    </div>
  );
}
