import { StyleSheet } from 'react-native';

import { colors, spacing, typography, shadows } from '@styles/theme';


export const styles = StyleSheet.create({
  listContainer: {
    padding: spacing.md,
  },
  itemContainer: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: spacing.md,
    marginBottom: spacing.sm,
    ...shadows.small,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  courseName: {
    fontSize: typography.sizes.large,
    fontWeight: typography.weights.semibold,
    color: colors.text.primary,
  },
  status: {
    fontSize: typography.sizes.small,
    fontWeight: typography.weights.medium,
  },
  itemDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateTime: {
    fontSize: typography.sizes.small,
    color: colors.text.secondary,
  },
});
