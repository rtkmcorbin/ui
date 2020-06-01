import styled, { css } from 'styled-components';

import { GlobalTheme } from '../../theme/types';

import { Typography } from '../typography/Typography';

interface ContainerProps {
  theme: GlobalTheme;
  validationStatus: 'success' | 'error' | 'warning';
}

export const Container = styled.div<ContainerProps>`
  min-height: ${({ theme }) => theme.validationNotificationMinHeight};

  max-width: ${({ theme }) => theme.validationNotificationMaxWidth};
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ validationStatus }) =>
    validationStatus === 'error' &&
    css`
      background: ${({ theme }) => theme.validationNotificationErrorBackground};
    `}

  ${({ validationStatus }) =>
    validationStatus === 'warning' &&
    css`
      background: ${({ theme }) =>
        theme.validationNotificationWarningBackground};
    `}

  ${({ validationStatus }) =>
    validationStatus === 'success' &&
    css`
      background: ${({ theme }) =>
        theme.validationNotificationSuccessBackground};
    `}

  border-radius: ${({ theme }) => theme.validationNotificationBorderRadius};
  box-shadow: ${({ theme }) => theme.validationNotificationBoxShadow};

  padding: ${({ theme }) => theme.validationNotificationPadding};
`;

export const NotificationTextContainer = styled.div`
  flex: 1;
  padding: 0 24px;
`;

export const NotificationText = styled(Typography.Body)`
  text-align: left;
`;
