import React from "react";

class ProfileCity extends React.Component {
    state = {
        editeMode: false,
        text: '',
        newPostElement: React.createRef()


    }
    activeEditeMode = () => {
        this.setState({
            editeMode: true,
        })
    }
    diactieEditeMode = () => {
        this.setState({
            editeMode: false
        })
    }


    handleChange = (e) => {
        debugger
        this.setState({
            text: e.target.value
        })
    }


    render() {
        return (
            <>
                {!this.state.editeMode &&
                <span onClick={this.activeEditeMode}>City: {this.state.text}</span>
                }
                {this.state.editeMode &&
                <input autoFocus={true} onBlur={this.diactieEditeMode} value={this.state.text}
                       onChange={this.handleChange}/>
                }
            </>
        )
    }
}

export default ProfileCity