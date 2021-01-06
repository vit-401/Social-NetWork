import React from 'react'
import Redirect from "react-router-dom/es/Redirect";

export const withAuthRedirect = (Component) => {
   return  class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth === false) return <Redirect to={"/login"}/>;
            return <Component {...this.props} />
        }
    }
}