import React from 'react'
import stl from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Messages from './Messages/Messages'
const Dialogs = (props) => {

    let dialogsData = props.dialogItem.map((d) => <DialogsItem DialogsName={d.name} DialogsImg={d.img} DialogsID={d.id} />)
    let messagesData = props.messagesItem.map((d) => <Messages mesMessages={d.message} mesID={d.id} />)
    return (
        <div className={stl.DialogsWrapper}>

            <div className={stl.Dialogs}>
                {dialogsData}
            </div>

            <div className={stl.vl}></div>

            <div className={stl.Messages}>
                {messagesData}
            </div>

        </div>
    )
}


export default Dialogs;