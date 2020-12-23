// const update_New_Massage_Body = 'UPDATE-NEW-Message-TEXT'
// const send_Message = 'Send_MESSAGE'
//
// const dialogsReduser = (state, action) => {
//     if (action.type === update_New_Massage_Body) {
//         state.newMessageBody = action.body;
//     } else if (action.type === send_Message) {
//         let body = state.newMessageBody
//         state.newMessageBody = ''
//         state.messages.push({
//             id: 6, message: body
//         })
//     }
//     return state
// }
// export default dialogsReduser


const update_New_Massage_Body = 'UPDATE-NEW-Message-TEXT'
const send_Message = 'Send_MESSAGE'
const initislState = {
    dialogs: [
        {id: 1, name: "Andrew"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Vitaliy"},
        {id: 4, name: "Dima"},
        {id: 5, name: "Pasha"},
        {id: 6, name: "kate"},
    ],
    messages: [
        {id: 1, message: "Hello Andrew"},
        {id: 2, message: "Hello Sasha"},
        {id: 3, message: "Hello Vitaliy"},
        {id: 4, message: "id-4"},
        {id: 5, message: "id-5"},
        {id: 6, message: "id-6"},
    ],
    newMessageBody: ''
}

const dialogsReduser = (state = initislState, action) => {
    switch (action.type) {
        case update_New_Massage_Body: {
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        case send_Message: {
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            let body = stateCopy.newMessageBody
            stateCopy.newMessageBody = ''
            stateCopy.messages.push({
                id: 6, message: body
            })
            return stateCopy
        }
        default:
            return state
    }
}
export const sendMessageCreator = () => ({type: send_Message})
export const updateNewMessageBodyCreator = (body) => ({type: update_New_Massage_Body, body: body})
export default dialogsReduser