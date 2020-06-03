import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
    component: Component,
    isAuthenticated,
    isLoading,
    ...rest
}) => (
        <Route
            {...rest}
            render={props =>
                isLoading ? (
                    <div />
                ) : isAuthenticated ? (
                    <Component {...props} />
                ) : (
                            <Redirect
                                to="/signin"
                            />
                        )
            }
        />
    );

export default ProtectedRoute;