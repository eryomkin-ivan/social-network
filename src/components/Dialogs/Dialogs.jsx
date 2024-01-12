import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/message/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink> 
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={s.massege}>{props.message}</div>
    )
};

const Dialogs = (props) => {
    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name = 'Andrey' id = '1' />
                    <DialogItem name = 'Artur' id = '2' />
                    <DialogItem name = 'Aleksey' id = '3' />
                    <DialogItem name = 'Alina' id = '4' />
                    <DialogItem name = 'Anatoliy' id = '5' />
                    
                </div>
                <div className={s.messages}>
                    <Message message= 'dsad' />
                    <Message message= 'dsasdadd' /> 
                    <Message message= 'ds34ad' />
                    <Message message= 'ds6545ad' />
                </div>
            </div>
    )
};

export default Dialogs;