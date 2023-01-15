import {columnsType, topBarType } from "../../../../page/main/data.mock";
import { Classes } from "../../../../types/styles";

export type TableTbodyType = {
  setCheckedID: any
  checkedID: any
  setData: () => void
  topBar: topBarType
  styles: Classes
  items: Array<columnsType>
}