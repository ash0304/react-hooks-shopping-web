import React, { useEffect } from 'react';
import { useHistory, withRouter } from 'react-router';

const ScrollToTop = (props) => {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);
  return <React.Fragment>{props.children}</React.Fragment>;
};

export default withRouter(ScrollToTop);
