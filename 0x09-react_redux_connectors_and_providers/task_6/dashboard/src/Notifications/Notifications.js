import React from 'react';
import PureComponent from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';
import { connect } from "react-redux";
import { fetchNotifications } from "../actions/notificationActionCreators";


const styles = StyleSheet.create({
  'notification-wrapper': {
    position: 'absolute',
    right: '1rem',
    margin: '1.4rem',
    '@media (max-width: 568px)': {
      width: '100%',
      margin: '0',
    },
  },

  Notifications: {
    position: 'relative',
    padding: '1rem',
    border: '1px dashed #e0364b',
    '@media (max-width: 568px)': {
      fontSize: '20px',
      position: 'absolute',
      border: 'none',
      top: '0',
      width: '100%',
      height: '100vh',
      padding: '0',
      background: '#fff',
    },
  },

  menuItem: {
    display: 'flex',
    paddingBottom: '0.3rem',
    justifyContent: 'end',
  },
});

class Notifications extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead,
    } = this.props;

    return (
      <div className={css(styles['notification-wrapper'])}>
        {!displayDrawer && (
          <div
            className={css(styles.menuItem)}
            onClick={handleDisplayDrawer}
            id='menuItem'
          >
            <p>Your notifications</p>
          </div>
        )}
        {displayDrawer && (
          <div className={css(styles.Notifications)}>
            <ul>
              {listNotifications?.length ? (
                <>
                  <p>Here is the list of notifications</p>
                  {listNotifications.map(({ id, html, type, value }) => (
                    <NotificationItem
                      key={id}
                      type={type}
                      value={value}
                      html={html}
                      id={id}
                      markNotificationAsRead={() => markNotificationAsRead(id)}
                    />
                  ))}
                </>
              ) : (
                <li data-notification-type='default'>
                  No new notification for now
                </li>
              )}
            </ul>
            <button
              style={{
                background: 'none',
                border: 'none',
                position: 'absolute',
                right: '.8rem',
                top: '1rem',
                cursor: 'pointer',
              }}
              aria-label='Close'
              onClick={handleHideDrawer}
              id='close'
            >
              <img src={closeIcon} alt='closeIcon' width='18px' />
            </button>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => { },
  handleHideDrawer: () => { },
  markNotificationAsRead: () => { },
};

export default Notifications;