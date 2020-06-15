import * as React from 'react';

import styled from 'styled-components';

import { useTheme } from '../../hooks/useTheme';

import { FormItemContext } from './FormItemContext';

export interface FormItemProps {
  /** className of the FormItem component */
  className?: string;

  /** Determines the style for the message and child component */
  status?: 'error' | 'success' | 'warning';

  /** Message to show when status is defined */
  message?: string;
}

const Container = styled.div``;

export const FormItem: React.FunctionComponent<FormItemProps> = ({
  children,
  className,
  message,
  status,
}) => {
  const theme = useTheme();
  return (
    <Container className={`${className} rtk-form-item `}>
      <FormItemContext.Provider
        value={{
          status,
          message,
        }}
      >
        {children}
      </FormItemContext.Provider>
      {hasFeedbackMessage && (
        <FeedbackMessage theme={theme}>
          <AnimatePresence>
            {message && status && (
              <motion.div
                key="validate-message"
                style={{ position: 'relative' }}
                initial={{ opacity: 0, top: -5 }}
                animate={{ opacity: 1, top: 0 }}
                exit={{ opacity: 0, top: -5 }}
                transition={{ duration: theme.animationTimeVeryFast }}
              >
                {validationComponent ? (
                  validationComponent(message)
                ) : (
                  <Status validationStatus={validationStatus} theme={theme}>
                    {validationMessage}
                  </Status>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </FeedbackMessage>
      )}
    </Container>
  );
};

FormItem.displayName = 'FormItem';
