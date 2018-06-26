import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { createShallow } from '@material-ui/core/test-utils';

describe('<App />', () => {
  const mockStore = configureStore()
  let store,container

  beforeEach(() => { 
    store = mockStore()
    container = createShallow(<App store={store} /> )  
  });
  
  it('renders without crashing', () => {
    expect(container.length).toEqual(1);
  });
});
