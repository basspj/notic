// Elevation / Shadow use same value

export interface IElevationState {
  resting: number;
  active: number;
}

export interface IMenu {
  menu: number;
  subMenu: number;
  nested: number; // subMenu + nested
}

export interface IElevation {
  dialog: number;
  picker: number;
  drawer: number;
  bottomSheet: number;
  fab: IElevationState;
  menu: IMenu;
  bottomNavBar: number;
  card: IElevationState;
  raisedButton: IElevationState;
  snackbar: number;
  appbar: number;
  refreshIndicator: number;
  quickEntry: IElevationState;
  searchBar: IElevationState;
  switch: number;
}
