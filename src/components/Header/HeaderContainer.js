import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {setUserData, setUserThunkCreator} from "../../Redux/auth-reduser";
import {connect} from "react-redux";
import {userAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        // userAPI.setUser()
        //     .then(data => {
        //         if (data.resultCode === 0) {
        //             let {login, id, email} = data.data
        //             this.props.setUserData(login, id, email)
        //         }
        //     })
        this.props.setUserThunkCreator()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapDispatchToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapDispatchToProps, {setUserThunkCreator,})(HeaderContainer);
