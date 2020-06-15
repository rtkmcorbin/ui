/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

import { Input } from '../../input/Input';
import { FormItem } from '../FormItem';

// @ts-ignore
import mdx from './FormItem.mdx';

export default {
  title: 'Components/FormItem',
  component: FormItem,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => (
  <FormItem>
    <Input />
  </FormItem>
);
