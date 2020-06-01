import * as React from 'react';

import { useTheme } from '../../hooks/useTheme';

import {
  Container,
  NotificationTextContainer,
  NotificationText,
} from './StyledNotificationBox';

import { NotificationIcon } from './NotificationIcon';
import { CloseIcon } from './CloseIcon';

export interface NotificationBoxProps {
  /** className of the notification component */
  className?: string;

  /** Callback to be called when close is clicked */
  onClose?: () => void;

  /** Determines the intent of the notification for the user */
  notificationType: 'default' | 'success' | 'error' | 'warning' | 'info';
}

export const NotificationBox: React.FunctionComponent<NotificationBoxProps> = ({
  children,
  className,
  onClose,
  notificationType,
}) => {
  const theme = useTheme();

  return (
    <Container
      className={`${className} rtk-validation-notification`}
      theme={theme}
      notificationType={notificationType}
    >
      <NotificationIcon notificationType={notificationType} />
      <NotificationTextContainer>
        <NotificationText>{children}</NotificationText>
      </NotificationTextContainer>
      <CloseIcon onClose={onClose} />
    </Container>
  );
};

NotificationBox.displayName = 'NotificationBox';
