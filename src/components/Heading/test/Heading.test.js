import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('***--- Header Component ---***', () => {
  it('test', () => {
    expect(1).toEqual(1);
  });
});