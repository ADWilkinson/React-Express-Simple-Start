import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [state, setState] = useState({ username: '' });
  useEffect(() => {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => setState({ username: user.username }));
  }, []);

  return <React.Fragment>{state.username}</React.Fragment>;
};

export default HomePage;
