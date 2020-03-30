---
to: src/components/<%= name %>/test/<%= name %>.test.js
---
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import <%= name %> from '..';

configure({ adapter: new Adapter() });

let wrapper;
const props = {
  id: 'test_<%= h.changeCase.lower(name) %>_id',
};

describe('***--- <%= name %> Component ---***', () => {
  beforeAll(() => {
    wrapper = shallow(<<%= name %> {...props} />);
  });

  it('To match snapshot of <%= name %> component', async (done) => {
    expect(wrapper).toMatchSnapshot();
    done();
  });
});