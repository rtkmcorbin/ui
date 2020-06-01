/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

import { ValidationNotification } from '../ValidationNotification';

// @ts-ignore
import mdx from './ValidationNotification.mdx';

export default {
  title: 'Components/ValidationNotification',
  component: ValidationNotification,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const Spacer = styled.div`
  height: 16px;
`;

export const simple = () => (
  <React.Fragment>
    <ValidationNotification validationStatus="warning">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dui
      posuere, blandit massa sit amet, rutrum risus.
    </ValidationNotification>
    <Spacer />
    <ValidationNotification validationStatus="error">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dui
      posuere, blandit massa sit amet, rutrum risus.
    </ValidationNotification>
    <Spacer />
    <ValidationNotification validationStatus="success">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dui
      posuere, blandit massa sit amet, rutrum risus.
    </ValidationNotification>
  </React.Fragment>
);
