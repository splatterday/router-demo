import * as React from 'react';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router';

const DelayRedirect = ({ delay, ...rest }) => {
  const [timeToRedirect, setTimeToRedirect] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeToRedirect(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return timeToRedirect ? <Navigate {...rest} /> : null;
};

export default DelayRedirect;