import {
  moderateWidthScale as modWidthScale,
  moderateHeightScale as modHeightScale,
} from '@shared/themes';

import { Metrics } from '../Metrics';

const { window: { width, height } } = Metrics;

export const moderateWidthScale = modWidthScale(width);
export const moderateHeightScale = modHeightScale(height);
