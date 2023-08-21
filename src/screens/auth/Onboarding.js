import React, {useContext, useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import slides from '@assets/js/onboardingItems';

import SlideItem from '@components/onboarding/SlideItem';
import SafeAreaComp from '@components/widgets/SafeAreaComp';
import SliderIndicator from '@components/onboarding/SliderIndicator';

import {family} from '@theme';

import {h, w, res} from '@utils/responsive';
import {width, height} from '@utils/dimensions';

const carouselDuration = 5000;
const Onboarding = ({navigation, route}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flowComplete, setFlowComplete] = useState(false);

  const scrollValue = useRef(new Animated.Value(0)).current;

  const slideRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const goNext = () => {
    slideRef.current.scrollToOffset({
      offset: (currentIndex + 1) * width,
    });
  };
  const skip = () => {
    slideRef.current.scrollToOffset({
      offset: 2 * width,
    });
  };

  const goToLogIn = () => {};
  useEffect(() => {
    currentIndex < 2 ? setFlowComplete(false) : setFlowComplete(true);

    let scrollTimeoutId = setTimeout(() => {
      if (currentIndex < 2) {
        goNext();
        // setFlowComplete(false);
      }
      if (currentIndex === 2) {
        // setFlowComplete(true);
      }
    }, carouselDuration);

    return () => {
      clearTimeout(scrollTimeoutId);
    };
  }, [currentIndex]);

  return (
    <SafeAreaComp style={styles.container} statusBarProps={{translucent: true}}>
      <Animated.FlatList
        data={slides}
        ref={slideRef}
        // contentContainerStyle={{flex: 1}}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        showsVertcalScrollIndicator={false}
        directionalLockEnabled
        renderItem={({item}) => <SlideItem item={item} />}
        bounces={false}
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollValue}}}],
          {useNativeDriver: false},
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
      />

      <SliderIndicator data={slides} scrollX={scrollValue} />
      <LinearGradient
        style={[styles.gradient]}
        locations={[0, 0.76]}
        colors={['rgba(105, 105, 105, 0)', '#000']}
        useAngle={true}
        angle={180}
      />
      <View style={styles.btnContainer}>
        {flowComplete ? (
          <TouchableOpacity style={styles.getStartedBtn} onPress={goToLogIn}>
            <Text style={styles.getStartedTxt}>Get Started</Text>
          </TouchableOpacity>
        ) : (
          <>
            <Text style={styles.skipTxt} onPress={skip}>
              Skip
            </Text>
            <TouchableOpacity style={styles.nextBtn} onPress={goNext}>
              <Text style={styles.nextTxt}>Next</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </SafeAreaComp>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    bottom: 0,
    width: w(360),
    height: h(262),
    backgroundColor: 'transparent',
    position: 'absolute',
    zIndex: 2,
  },
  btnContainer: {
    width: width,
    paddingHorizontal: w(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: h(46),
    zIndex: 3,
  },
  skipTxt: {
    fontSize: h(15),

    fontFamily: family.Medium,
    fontWeight: '500',
    color: '#FAFAFA',
    textAlignVertical: 'center',
  },

  nextTxt: {
    fontSize: h(16),

    fontFamily: family.Medium,
    fontWeight: '500',
    color: '#000',
  },
  nextBtn: {
    width: w(108),
    height: h(49),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: w(8),
    backgroundColor: '#fff',
    // borderWidth:1,
    // borderColor:'#000',
  },

  getStartedBtn: {
    width: '100%',
    height: h(49),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: w(8),
    backgroundColor: '#fff',
  },
  getStartedTxt: {
    fontSize: h(16),

    fontFamily: family.Medium,
    fontWeight: '500',
    color: '#000',
  },
});
