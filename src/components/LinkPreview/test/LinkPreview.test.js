import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LinkPreview from '..';

configure({ adapter: new Adapter() });

let wrapper;
const props = {
  id: 'test_linkpreview_id',
  url: 'https://blueprintjs.com',
  previewNotFoundText: 'Custom text',
  isFullWidth: true,
};

describe('***--- LinkPreview Component ---***', () => {
  beforeAll(() => {
    wrapper = shallow(<LinkPreview {...props} />);
  });

  it('To match snapshot of LinkPreview component', async (done) => {
    expect(wrapper).toMatchSnapshot();
    done();
  });
});