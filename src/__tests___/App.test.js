import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { createShallow } from '@material-ui/core/test-utils';

describe('<App />', () => {
  let shallow;
  const initialState = {output:100}
  const mockStore = configureStore()
  let store,container

  beforeEach(() => { 
    store = mockStore(initialState)
    container = createShallow(<App store={store} /> )  
  });
  
  it('renders without crashing', () => {
    expect(container.length).toEqual(1);
  });
});
