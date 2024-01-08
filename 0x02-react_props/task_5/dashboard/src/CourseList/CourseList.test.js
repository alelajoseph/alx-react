import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow')).toHaveLength(5);
  });

  it('renders correctly with an empty array or without listCourses property', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('.CourseList')).toHaveLength(1);
  });

  it('renders listCourses correctly', () => {
    const courses = [
      { id: 1, name: 'Course 1', credit: 3 },
      { id: 2, name: 'Course 2', credit: 4 },
    ];
    const wrapper = shallow(<CourseList listCourses={courses} />);
    expect(wrapper.find('.CourseList li')).toHaveLength(courses.length);
  });
});
