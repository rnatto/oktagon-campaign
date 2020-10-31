import React from 'react';
import {
  RouteProps as ReactDomRouteProps,
  Route as ReactDOMRoute,
} from 'react-router-dom';

interface RouteProps extends ReactDomRouteProps {
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return <Component />
      }}
    />
  );
};

export default Route;
