import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { colors } from '../../styles/theme';

import { styles } from './ReservationList.styles';

type Reservation = {
  id: string;
  courseName: string;
  date: string;
  time: string;
  status: 'available' | 'reserved';
};

const mockData: Reservation[] = [
  {
    id: '1',
    courseName: '코스 A',
    date: '2024-03-20',
    time: '09:00',
    status: 'available',
  },
  {
    id: '2',
    courseName: '코스 B',
    date: '2024-03-20',
    time: '10:00',
    status: 'reserved',
  },
];

const ReservationList = () => {
  const renderItem = ({ item }: { item: Reservation }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.itemHeader}>
        <Text style={styles.courseName}>{item.courseName}</Text>
        <Text
          style={[
            styles.status,
            { color: item.status === 'available' ? colors.success : colors.error },
          ]}
        >
          {item.status === 'available' ? '예약 가능' : '예약 완료'}
        </Text>
      </View>
      <View style={styles.itemDetails}>
        <Text style={styles.dateTime}>
          {item.date} {item.time}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={mockData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default ReservationList;
