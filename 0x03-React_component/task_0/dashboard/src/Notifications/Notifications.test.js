import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
// import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
  it('renders NotificationItem elements', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('NotificationItem').exists()).toBe(false);
  });

  // it('renders correct html win the first NotificationItem', () => {
  //   const wrapper = shallow(<Notifications />);
  //   const firstNotificationItem = wrapper.find('NotificationItem').first();
  //   expect(firstNotificationItem.prop('type')).toBe('default');
  //   expect(firstNotificationItem.prop('value')).toBe('New course available');
  // });

  it('displays menuItem when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
  });

  it('does not display div.Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.Notifications')).toHaveLength(0);
  });

  // it('displays menuItem when displayDrawer is true', () => {
  //   const wrapper = shallow(<Notifications displayDrawer={true} />);
  //   expect(wrapper.find('div.menuItem')).toHaveLength(1);
  // });

  // it('display div.Notifications when displayDrawer is true', () => {
  //   const wrapper = shallow(<Notifications displayDrawer={true} />);
  //   expect(wrapper.find('div.Notifications')).toHaveLength(1);
  // });

  // it('renders correctly with an empty array or without listNotifications property', () => {
  //   const wrapper = shallow(<Notifications />);
  //   expect(wrapper.find('.Notifications')).toHaveLength(1);
  //   expect(wrapper.find('.Notifications p').text()).toBe(
  //     'No new notification for now'
  //   );
  // });

  // it('renders listNotifications correctly and with the right number of NotificationItems', () => {
  //   const notifications = [
  //     { id: 1, type: 'info', value: 'Notification 1' },
  //     { id: 2, type: 'urgent', value: 'Notification 2' },
  //   ];
  //   const wrapper = shallow(
  //     <Notifications listNotifications={notifications} />
  //   );
  //   expect(wrapper.find(NotificationItem)).toHaveLength(notifications.length);
  // });

  // it('displays the appropriate messages when listNotifications is empty', () => {
  //   const wrapper = shallow(
  //     <Notifications displayDrawer={true} listNotifications={[]} />
  //   );
  //   expect(wrapper.find('.Notifications p').text()).toBe(
  //     'No new notification for now'
  //   );
  // });
});
