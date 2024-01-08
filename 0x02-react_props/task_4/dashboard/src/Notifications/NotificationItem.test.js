import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct value for type and props', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    const li = wrapper.find('li');
    expect(li).toHaveLength(1);
    expect(li.text()).toBe('test');
    expect(li.prop('data-notification-type')).toBe('default');
  });

  it('renders correct html when html prop is passed', () => {
    const htmlProp = { __html: '<u>test</u>' };
    const wrapper = shallow(
      <NotificationItem type='default' html={htmlProp} />
    );
    const li = wrapper.find('li');
    expect(li.prop('data-notification-type')).toBe('default');
    expect(wrapper.html()).toContain('<u>test</u>');
  });
});
