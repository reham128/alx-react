import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';


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

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length >
      this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer, listNotifications } = this.props;

    return (
      <React.Fragment>
        {displayDrawer ? (
          <div className={css(styles["flex-area"])}>
            <div className={css(styles.menuItem)} onClick={handleHideDrawer}>
              <p>Your notifications</p>
            </div>
            <div className={css(styles.Notifications)}>
              <ul>
                {listNotifications && listNotifications.length > 0 ? (
                  listNotifications.map(
                    ({ id, html, type, value }) => (
                      <NotificationItem
                        key={id}
                        markAsRead={this.markAsRead}
                        type={type}
                        value={value}
                        html={html}
                      />
                    )
                  )
                ) : (
                  <div className={css(styles["notification-header"])}>
                    <NotificationItem value="No new notification for now" />
                    <button
                      style={{
                        border: "none",
                        background: "none",
                      }}
                      aria-label="Close"
                      onClick={handleHideDrawer} // Update to use handleHideDrawer
                    >
                      <img
                        style={{ display: "inline" }}
                        src={closeIcon}
                        alt="Close"
                      />
                    </button>
                  </div>
                )}
              </ul>
            </div>
          </div>
        ) : (
          <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}> {/* Update to use handleDisplayDrawer */}
            <p>Your notifications</p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func, // Define propTypes for the new props
  handleHideDrawer: PropTypes.func, // Define propTypes for the new props
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => { }, // Default function for handleDisplayDrawer
  handleHideDrawer: () => { }, // Default function for handleHideDrawer
};

export default Notifications;