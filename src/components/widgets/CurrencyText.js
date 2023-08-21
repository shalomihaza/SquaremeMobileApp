import React from 'react';
import {StyleSheet, Text} from 'react-native';
import NumberFormat from 'react-number-format';

import AppText from '@components/widgets/Text';

import {family} from '@theme';

import {width, height} from '@utils/dimensions';
import {txtTypes} from '@utils/constants/types';
import {w, h} from '@utils/responsive';

const CurrencyText = ({
  type,
  children,
  style = {},
  prefix = '₦ ',
  ...textProps
}) => {
  let textStyle;

  switch (type) {
    case txtTypes.HEADER:
      textStyle = styles.header;
      break;
    case txtTypes.BODY:
      textStyle = styles.body;
      break;
    case txtTypes.BTN_TEXT:
      textStyle = styles.btnText;
      break;
    default:
      textStyle = {};
      break;
  }

  return (
    <Text style={[textStyle, style]} {...textProps}>
      <NumberFormat
        thousandSeparator={true}
        prefix={prefix}
        value={Math.ceil(children)}
        displayType="text"
        renderText={(formattedValue, customProps) => (
          <AppText style={style}>{formattedValue}</AppText>
        )}
      />
    </Text>
  );
};
const styles = StyleSheet.create({
  header: {
    fontSize: h(30),

    fontFamily: family.dSemiBold,
    fontWeight: '700',
    color: '#fff',
  },
  body: {
    fontSize: h(15),

    color: '#fff',

    fontFamily: family.dRegular,
  },
});
export default CurrencyText;
