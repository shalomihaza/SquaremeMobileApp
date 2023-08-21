import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, View, Image} from 'react-native';

import {family, colors} from '@theme';

import {h, w} from '@utils/responsive';

import {width, height} from '@utils/dimensions';

const SlideItem = ({item}) => {
  const progress = useRef(new Animated.Value(0)).current;

  const handleLikeAnimation = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    handleLikeAnimation();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="cover" source={item.img} />
      <View
        style={{
          width: width,
          top: h(544),
          position: 'absolute',
          paddingHorizontal: w(24),
          zIndex: 4,
        }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );
};
export default SlideItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
  image: {
    height: '100%',
    width: width,

    resizeMode: 'cover',
  },
  title: {
    color: '#fff',

    fontSize: h(24),
    fontFamily: family.dRegular,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: h(16),
    marginTop: h(14),

    fontFamily: family.dRegular,

    color: '#fff',
  },
});
