
import React, { useState } from 'react';
import './App.css';
import notificationsData from './notifications';
import NotificationList from './components/NotificationList';

function App() {
  const [notifications, setNotifications] = useState(notificationsData);

  const clearNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="App">
      <h1>Notification App</h1>
      <NotificationList
        notifications={notifications}
        onClear={clearNotification}
        onClearAll={clearAllNotifications}
      >
        
      </NotificationList>
    </div>
  );
}

export default App;
