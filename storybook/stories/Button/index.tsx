import React from 'react';
import {
  TouchableNativeFeedback,
  TouchableHighlight,
  Platform,
} from 'react-native';

const Touchable =
  Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight;

export interface IButtonProps {
  children: any;
  onPress: any;
}

const Button: React.SFC<IButtonProps> = ({
  onPress,
  children,
}: IButtonProps) => <Touchable onPress={onPress}>{children}</Touchable>;

Button.defaultProps = {
  children: null,
  onPress: () => {},
};

export default Button;
