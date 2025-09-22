import { IoWarningOutline } from 'react-icons/io5';

export const defaultErrorMessage =
  'Oops, something went wrong. Try reloading the page.';

export const configurationImages = {
  baseUrl: 'http://image.tmdb.org/t/p/',
  posterSize: 342,
  profileSize: 185,
};

export const toastOptions = {
  success: {
    style: {
      color: 'var(--white-color)',
      background: 'rgba(0, 128, 0, 0.7)',
    },
    iconTheme: {
      primary: 'var(--white-color)',
      secondary: 'green',
    },
  },
  error: {
    style: {
      color: 'var(--white-color)',
      background: 'rgba(255, 85, 73, 0.6)',
    },
    iconTheme: {
      primary: 'var(--white-color)',
      secondary: 'rgb(255, 85, 73)',
    },
  },
};

export const toastWarningOptions = {
  style: {
    color: 'var(--white-color)',
    background: 'rgba(238, 191, 49, 0.8)',
  },
  icon: <IoWarningOutline size={24} />,
};

export const toastContainerStyle = {
  top: 160,
};

export const stripHTML = content => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = content;

  return tempDiv.textContent || tempDiv.innerText || '';
};
