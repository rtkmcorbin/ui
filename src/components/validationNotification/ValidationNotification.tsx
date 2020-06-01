import * as React from 'react';

import { useTheme } from '../../hooks/useTheme';

import {
  Container,
  NotificationTextContainer,
  NotificationText,
} from './StyledValidationNotification';

import { NotificationIcon } from './NotificationIcon';
import { CloseIcon } from './CloseIcon';

export interface ValidationNotificationProps {
  /** className of the notification component */
  className?: string;

  /** Callback to be called when close is clicked */
  onClose?: () => void;

  /** Determines the color of the validation notification */
  validationStatus: 'success' | 'error' | 'warning';
}

export const ValidationNotification: React.FunctionComponent<ValidationNotificationProps> = ({
  children,
  className,
  onClose,
  validationStatus,
}) => {
  const theme = useTheme();

  return (
    <Container
      className={`${className} rtk-validation-notification`}
      theme={theme}
      validationStatus={validationStatus}
    >
      <NotificationIcon validationStatus={validationStatus} />
      <NotificationTextContainer>
        <NotificationText>{children}</NotificationText>
      </NotificationTextContainer>
      <CloseIcon onClose={onClose} />
    </Container>
  );
};

ValidationNotification.displayName = 'ValidationNotification';
