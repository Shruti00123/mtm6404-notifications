import React from 'react';
import NotificationItem from './NotificationItem';

const NotificationList = ({ notifications, onClear, onClearAll, children }) => (
  <div className="notification-list container mt-4">
    <h3>Notifications ({notifications.length})</h3>
    {notifications.map(notification => (
      <NotificationItem
        key={notification.id}
        notification={notification}
        onClear={onClear}
      />
    ))}
    <button className="btn btn-warning mt-3" onClick={onClearAll}>Clear All</button>
    {children}
  </div>
);

export default NotificationList;
