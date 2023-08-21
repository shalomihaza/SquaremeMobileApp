import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';

import {h, w, res} from '@utils/responsive';

import {width, height} from '@utils/dimensions';

const SliderIndicator = ({data, scrollX}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        position: 'absolute',
        top: h(507),
        paddingLeft: w(24),
        zIndex: 4,
      }}>
      {data?.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const indicatorWidth = scrollX.interpolate({
          inputRange,
          outputRange: [35, 35, 35],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.4, 1, 0.4],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            style={[styles.indicatorDot, {width: indicatorWidth, opacity}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default SliderIndicator;

const styles = StyleSheet.create({
  indicatorDot: {
    height: h(10),
    borderRadius: w(30),
    width: w(35),
    backgroundColor: '#fff',
    marginRight: w(10),
  },
});
