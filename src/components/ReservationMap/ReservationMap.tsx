import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './ReservationMap.styles';

const ReservationMap = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.placeholderText}>
        지도 뷰 (지도 라이브러리 추가 예정)
      </Text>
    </View>
  );
};

export default ReservationMap;
