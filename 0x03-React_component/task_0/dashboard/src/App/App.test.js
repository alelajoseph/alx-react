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
});

describe('isLoggedIn is true', () => {
  const wrapper = shallow(<App isLoggedIn={true} />);
  expect(wrapper.find(Login)).toHaveLength(0);
  expect(wrapper.find(CourseList)).toHaveLength(1);
});
