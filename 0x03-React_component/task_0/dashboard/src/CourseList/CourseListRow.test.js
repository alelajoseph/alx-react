import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CoruseListRow component', () => {
  it('renders one cell with colspan = 2 when textSecondCell does not exist (isHeader=true)', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textSecondCell={null} />
    );
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toBe(2);
  });

  it('renders two cell when textSecondCell is present (isHeader=true)', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textSecondCell={!null} />
    );
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('renders two td elements within a tr element (isHeader=false)', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textSecondCell={!null} />
    );
    const tr = wrapper.find('tr');
    expect(tr).toHaveLength(1);
    expect(tr.find('td')).toHaveLength(2);
  });
});
