import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Label from '..';

configure({ adapter: new Adapter() });

let wrapper;
const props = {
  id: 'test_Label_id',
  fontWeight: 'bold',
  isItalic: true,
};

describe('***--- Label Component ---***', () => {
  beforeAll(() => {
    wrapper = shallow(<Label {...props}>Label text</Label>);
  });

  it('To match snapshot of Label component', async (done) => {
    expect(wrapper).toMatchSnapshot();
    done();
  });
});