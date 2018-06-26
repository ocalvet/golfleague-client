import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { createShallow } from '@material-ui/core/test-utils';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  let shallow;
  const initialState = {output:100}
  const mockStore = configureStore()
  let store,container

  beforeEach(() => { 
    store = mockStore(initialState)
    container = createShallow(<App store={store} /> )  
  });

  // it('should work', () => {
  //   const wrapper = shallow(<App />);
  // });

  it('renders without crashing', () => {
    expect(container.length).toEqual(1);
  });
});
