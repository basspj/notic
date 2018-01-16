import { IMetrics as ISharedMetrics } from '@shared/themes';

export interface IMetrics extends ISharedMetrics {
  window: IWindow;
}

export interface IWindow {
  width: number;
  height: number;
}
