import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { createShallow } from '@material-ui/core/test-utils';

describe('<Header />', () => {
  const mockStore = configureStore()
  let store,container

  beforeEach(() => { 
    store = mockStore()
    container = createShallow(<Header store={store} /> )  
  });
  
  it('renders without crashing', () => {
    expect(container.length).toEqual(1);
  });
});
