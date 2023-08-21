import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import AppText from '@components/widgets/Text';

import {w, h} from '@utils/responsive';
import {btnTypes, txtTypes} from '@utils/constants/types';

const AppButton = ({
  type,
  children,
  disabled = false,
  style = {},
  ...btnProps
}) => {
  const bgColor = disabled ? '#D3D3D3' : '#000A4A';
  const txtColor = disabled ? 'rgba(255,255,255,0.5)' : '#fff';

  if (type === btnTypes.WITH_TEXT) {
    return (
      <Pressable
        disabled={disabled}
        style={({pressed}) => [
          {
            backgroundColor: bgColor,
            opacity: pressed ? 0.5 : 1,
          },
          styles.appBtn,
          {...style},
        ]}
        {...btnProps}>
        <AppText type={txtTypes.BTN_TEXT} style={{color: txtColor}}>
          {children}
        </AppText>
      </Pressable>
    );
  }
  return (
    <Pressable
      style={({pressed}) => [
        {
          opacity: pressed ? 0.5 : 1,
        },

        {...style},
      ]}
      {...btnProps}>
      {children}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  appBtn: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: w(5),

    width: w(312),
    height: h(48),
  },
});
export default AppButton;
