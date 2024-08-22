import React from "react";
import "./Notifications.css";
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
  const closeButtonClicked = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="Notifications" style={{ border: '1px solid black', padding: '10px', position: 'relative' }}>
      <p>Here is the list of notifications</p>
      <button
        aria-label="Close"
        onClick={closeButtonClicked}
        style={{
          background: 'none',
          border: 'none',
          position: 'absolute',
          right: '1.8rem',
          top: '2rem',
          cursor: 'pointer',
        }}>
        <img src={closeIcon} alt="close icon" style={{ width: '15px', height: '15px' }} />
      </button>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent" style={{ color: 'red' }}>New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}

export default Notifications;