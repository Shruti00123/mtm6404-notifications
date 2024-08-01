import React from 'react';

const NotificationItem = ({ notification, onClear }) => (
  <div className="notification-item d-flex justify-content-between align-items-center border p-3 mb-3 rounded">
    <div>
      <h4 className="m-0">{notification.name}</h4>
      <p className="m-0">{notification.message}</p>
    </div>
    <button className="btn btn-danger btn-sm" onClick={() => onClear(notification.id)}>Clear</button>
  </div>
);

export default NotificationItem;
