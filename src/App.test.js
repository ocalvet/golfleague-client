import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { createShallow } from '@material-ui/core/test-utils';

describe('<App />', () => {
  const mockStore = configureStore()
  let store,container, shallow;

  beforeEach(() => { 
    shallow = createShallow();
    store = mockStore();
    container = shallow(<App store={store} />);
  });
  
  it('renders without crashing', () => {
    console.log(container.debug());
    expect(container.length).toEqual(1);
  });

  it('renders a WithStyles element', () => {
    expect(container.find('WithStyles').length).toEqual(1);
  })
});
