import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const setup = (props={}) => {
  return shallow(<App {...props} />);
};

const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
}


describe("App Component", () => {

  let component;
  beforeEach(() => {
    component = setup();
  });


  it('Should render without errors', () => {
    const wrapper = findByTestAttr(component, 'App');
    expect(wrapper.length).toBe(1);
  });

});

