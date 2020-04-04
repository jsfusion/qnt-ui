import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Callout from '..';

configure({ adapter: new Adapter() });

let wrapper;
const props = {
  id: 'test_callout_id',
  icon: 'add',
  variant: 'primary',
  title: 'Sample title',
};

describe('***--- Callout Component ---***', () => {
  beforeAll(() => {
    wrapper = shallow(<Callout {...props}>Sample test</Callout>);
  });

  it('To match snapshot of Callout component', async (done) => {
    expect(wrapper).toMatchSnapshot();
    done();
  });
});