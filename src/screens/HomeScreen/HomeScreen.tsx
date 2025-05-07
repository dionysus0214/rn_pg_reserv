import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import ReservationList from '@components/ReservationList/ReservationList';
import ReservationMap from '@components/ReservationMap/ReservationMap';

import { styles } from './HomeScreen.styles';

type ViewMode = 'list' | 'map';

const HomeScreen = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('list');

  return (
    <View style={styles.container}>
      <View style={styles.viewToggle}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            viewMode === 'list' && styles.activeButton,
          ]}
          onPress={() => setViewMode('list')}>
          <Text
            style={[
              styles.toggleText,
              viewMode === 'list' && styles.activeText,
            ]}>
            리스트
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            viewMode === 'map' && styles.activeButton,
          ]}
          onPress={() => setViewMode('map')}>
          <Text
            style={[
              styles.toggleText,
              viewMode === 'map' && styles.activeText,
            ]}>
            지도
          </Text>
        </TouchableOpacity>
      </View>
      {viewMode === 'list' ? <ReservationList /> : <ReservationMap />}
    </View>
  );
};

export default HomeScreen;
