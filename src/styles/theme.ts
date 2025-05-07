export const colors = {
  primary: '#007AFF',
  success: '#4CAF50',
  error: '#F44336',
  background: '#FFFFFF',
  text: {
    primary: '#333333',
    secondary: '#666666',
  },
  border: '#E0E0E0',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const typography = {
  sizes: {
    small: 14,
    medium: 16,
    large: 18,
  },
  weights: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
};

export const shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
};
