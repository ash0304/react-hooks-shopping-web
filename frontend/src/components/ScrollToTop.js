import React, { useEffect } from 'react';
import { useHistory, withRouter } from 'react-router';

const ScrollToTop = (props) => {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    return () => {
      unlisten();
    };
  }, [history]);
  return <React.Fragment>{props.children}</React.Fragment>;
};

export default withRouter(ScrollToTop);
