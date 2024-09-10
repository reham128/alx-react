import React from 'react';
import App from './App';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { shallow, mount } from 'enzyme';

describe('App Component', () => {
  let logOutMock, wrapper, alertMock;

  beforeEach(() => {
    logOutMock = jest.fn();
    alertMock = jest.spyOn(window, 'alert').mockImplementation(() => { });

    wrapper = mount(<App logOut={logOutMock} />);
  });

  afterEach(() => {
    alertMock.mockRestore();
    wrapper.unmount();
  });

  it('calls logOut and shows alert when control + h is pressed', () => {
    // Simulate pressing control + h
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();
  });

  it('Checks that displayDrawer is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it('Checks that displayDrawer changes to true when handleDisplayDrawer is called and false when handleHideDrawer is called', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);

    wrapper.instance().handleDisplayDrawer();

    expect(wrapper.state().displayDrawer).toEqual(true);

    wrapper.instance().handleHideDrawer();

    expect(wrapper.state().displayDrawer).toEqual(false);
  });
});

describe('App tests', () => {
  it('renders without crashing', () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });

  it('contain Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('should render Header component', () => {
    const component = shallow(<App />);

    expect(component.contains(<Header />)).toBe(true);
  });

  it('should render Footer component', () => {
    const component = shallow(<App />);

    expect(component.contains(<Footer />)).toBe(true);
  });

  it('Should not render courselist if logged out', () => {
    const component = shallow(<App />);

    component.setProps({ isLoggedIn: false });

    expect(component.contains(<Login />)).toBe(true);
  });

  it('should render courselist if logged in', () => {
    const component = shallow(<App isLoggedIn />);
    component.update();
    expect(component.find('CourseList')).toHaveLength(1);
  });
});