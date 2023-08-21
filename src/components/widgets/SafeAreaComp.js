import React from 'react';

import {StyleSheet, View, Platform} from 'react-native';
import FocusAwareStatusBar from './FocusAwareStatusBar';
import {height, width} from '@utils/dimensions';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

const SafeAreaComp = ({children, style = {}, statusBarProps = {}}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        width: width,
        backgroundColor: '#fff',
        ...style,
        // Paddings to handle safe area

        paddingTop: Platform.OS === 'ios' ? insets.top : 0,
        // paddingBottom: insets.bottom,
        // paddingLeft: insets.left,
        // paddingRight: insets.right,
      }}>
      <FocusAwareStatusBar {...statusBarProps} />

      {children}
    </View>
  );
};

export default SafeAreaComp;
