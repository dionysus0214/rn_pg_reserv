import { StyleSheet } from 'react-native';

import { colors, typography } from '@styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  placeholderText: {
    fontSize: typography.sizes.medium,
    color: colors.text.secondary,
  },
});
