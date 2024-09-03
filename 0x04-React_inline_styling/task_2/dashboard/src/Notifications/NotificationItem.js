import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  default: {
    color: "blue",
  },
  urgent: {
    color: "red",
  },
});

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    return (
      <React.Fragment>
        {type && value ? (
          <li
            className={
              type === "default" ? css(styles.default) : css(styles.urgent)
            }
            onClick={() => markAsRead(id)}
            data-notification-type={type}
          >
            {value}
          </li>
        ) : null}
        {html ? (
          <li
            className={css(styles.urgent)}
            onClick={() => markAsRead(id)}
            data-urgent
            dangerouslySetInnerHTML={{ __html: html }}
          ></li>
        ) : null}
      </React.Fragment>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;