import { useState } from 'react';

const useNotification = () => {
  const [notification, setNotification] = useState({
	show: false,
	message: '',
	type: 'info' // 'info', 'success', 'error', 'warning'
  });

  const showNotification = (message, type = 'info') => {
	setNotification({ show: true, message, type });
  };

  const hideNotification = () => {
	setNotification({ show: false, message: '', type: 'info' });
  };

  return { notification, showNotification, hideNotification };
};

export default useNotification;
