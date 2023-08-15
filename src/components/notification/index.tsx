import { FC, useEffect, useRef } from 'react';
import './styles.scss';

interface NotificationProps {
  message: string;
  visible: boolean;
}

const Notification: FC<NotificationProps> = ({ message, visible }) => {
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible && notificationRef.current) {
      notificationRef.current.classList.remove('hide');
    }
  }, [visible]);

  const handleAnimationEnd = () => {
    if (!visible && notificationRef.current) {
      notificationRef.current.classList.add('hide');
    }
  };

  return (
    <div
      ref={notificationRef}
      className={`notification ${visible ? 'show' : 'hide'}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {message}
    </div>
  );
};

export default Notification;
