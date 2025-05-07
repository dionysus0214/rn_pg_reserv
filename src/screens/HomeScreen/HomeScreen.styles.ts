import { StyleSheet } from 'react-native';

import { colors, spacing } from '@styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  viewToggle: {
    flexDirection: 'row',
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    marginHorizontal: spacing.xs,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
  activeButton: {
    backgroundColor: colors.primary,
  },
  toggleText: {
    fontSize: 16,
    color: colors.text.primary,
  },
  activeText: {
    color: colors.background,
  },
});
