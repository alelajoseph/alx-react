import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

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
});
