import { Dimensions } from 'react-native';

import { IMetrics } from './type';

const window = Dimensions.get('window');

export const Metrics: IMetrics = {
  window,
};
