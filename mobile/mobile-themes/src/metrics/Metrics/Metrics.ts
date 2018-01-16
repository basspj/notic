import { Dimensions } from 'react-native';
import { Metrics as SharedMetrics } from '@shared/themes';

import { IMetrics } from './type';

const window = Dimensions.get('window');

export const Metrics: IMetrics = {
  ...SharedMetrics,
  window,
};
