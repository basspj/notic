import React from 'react';
import { View } from 'react-native';

import style from './style';

export interface ICenterViewProps {
  children: any;
}

const CenterView: React.SFC<ICenterViewProps> = ({
  children,
}: ICenterViewProps) => <View style={style.main}>{children}</View>;

CenterView.defaultProps = {
  children: null,
};

export default CenterView;
