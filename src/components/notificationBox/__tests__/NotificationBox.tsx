import * as React from 'react';

import { shallow } from 'enzyme';

import { NotificationBox } from '../NotificationBox';

describe('NotificationBox', () => {
  it('renders', () => {
    const wrapper = shallow(<NotificationBox notificationType="info" />);

    expect(wrapper.exists('StyledNotificationBox__Container')).toBe(true);
  });
});
