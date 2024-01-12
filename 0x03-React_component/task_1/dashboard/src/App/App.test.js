import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('contains Notifications component', () => {
    expect(wrapper.find('Notifications').exists()).toBe(true);
  });

  it('contains Header component', () => {
    expect(wrapper.find('Header').exists()).toBe(true);
  });

  it('contains Login component', () => {
    expect(wrapper.find('Login').exists()).toBe(true);
  });

  it('contains Footer component', () => {
    expect(wrapper.find('Footer').exists()).toBe(true);
  });

  it('does not render CourseList by default', () => {
    wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it('calls logOut function and displays alert when control and h keys are pressed', () => {
    const logOutMock = jest.fn();

    // Simulate keydown event with control and h keys
    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    document.dispatchEvent(event);

    // Verify that logOut function is called
    expect(logOutMock).toHaveBeenCalled();

    // Verify that alert function is called with the correct message
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
  });
});

describe('isLoggedIn is true', () => {
  const wrapper = shallow(<App isLoggedIn={true} />);
  expect(wrapper.find(Login)).toHaveLength(0);
  expect(wrapper.find(CourseList)).toHaveLength(1);
});
