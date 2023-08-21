import {Platform} from 'react-native';

/*
Available font weights

300 Light
400 Regular
500 Medium
600 SemiBold
700 Bold
*/

export const family = {
  dBold: Platform.select({
    ios: 'DMSans-Bold',
    android: 'DMSans-Bold',
  }),
  dRegular: Platform.select({
    ios: 'DMSans-Regular',
    android: 'DMSans-Regular',
  }),
  dMedium: Platform.select({
    ios: 'DMSans-Medium',
    android: 'DMSans-Medium',
  }),
};
