import { tableType } from '../../../page/main/data.mock';
import { Classes } from '../../../types/styles';

export type DataTableType = {
  hasCheckedAction?: boolean
  updateData: () => void
  setData: () => void
  table: tableType
}

// import {
//   DataTableTopActionBar,
//   DataTableActionBar,
//   DataTableBottomBar,
//   DataTableTopBar,
//   DataTableItemActionBar,
//   DataTableItems,
// } from 'types/DataTable';

export type DataTableProps = {
  // table: DataTableTopActionBar &
  //   DataTableActionBar &
  //   DataTableBottomBar &
  //   DataTableTopBar &
  //   DataTableItemActionBar &
  //   DataTableItems;
  table: any,
  availableMessage: string,
  pageConfig: any | null;
  favorites: any | undefined;
  search: any | undefined;
  hasActionsCount: boolean;
  hasCheckedAction: boolean;
  hasUseAction: boolean;
  checkedActionOffset: Array<number>;
  classes: Classes | undefined;
  full: string | undefined;
  updateData: () => void;
  setData: () => void;
  onToggleDetaile: () => void | undefined;
  hasToggleDetail: boolean;
  hasInSplitView: boolean;
  topRightContent: boolean | undefined;
};
