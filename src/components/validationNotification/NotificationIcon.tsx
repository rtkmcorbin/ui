import * as React from 'react';

import { useTheme } from '../../hooks/useTheme';

import CheckCircle from '../icons/CheckCircle';
import ExclamationCircle from '../icons/ExclamationCircle';
import ExclamationTriangle from '../icons/ExclamationTriangle';

interface NotificationIconProps {
  validationStatus: 'success' | 'error' | 'warning';
}

export const NotificationIcon = ({
  validationStatus,
}: NotificationIconProps) => {
  const theme = useTheme();

  switch (validationStatus) {
    case 'error': {
      return <ExclamationTriangle size="lg" color={theme.colors.red} />;
    }
    case 'warning': {
      return <ExclamationCircle size="lg" color={theme.colors.yellow} />;
    }
    case 'success': {
      return <CheckCircle size="lg" color={theme.colors.green} />;
    }
  }
};
