import { FC } from 'react';
import './styles.scss';

interface NotificationProps {
    message: string;
}

const Notification:FC <NotificationProps> = ({ message }) => {
  return (
    <div className="notification">
      {message}
    </div>
  );
};

export default Notification;
