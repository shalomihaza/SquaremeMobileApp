import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import {family} from '@theme';

import {width, height} from '@utils/dimensions';
import {w, h} from '@utils/responsive';

const ScrollViewComp = ({
  type,
  children,

  ...scrollViewProps
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} {...scrollViewProps}>
      {children}
    </ScrollView>
  );
};

export default ScrollViewComp;
