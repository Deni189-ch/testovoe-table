import React from 'react'
import StubImag from '../../../../../assets/images/lap-top.webp'

import styles from './ImagesColumn.module.scss'

export const ImagesColumn = () => {
  return (
    <div className={styles.wrapper}>
      <img src={StubImag} alt="stub" width="150px" height="120px"/>
    </div>
  );
}
