import React from "react";
import { STATES } from "../js/constants";


const SettingsListItem = ({item, state}) => {
    const stateClass = state === STATES.ACTIVE ? 'active' : '';
    return (
        <div className={`pokemon-item ${stateClass}`}>
            <div><b>{item.key}</b>: {item.value}</div>
        </div>
    )
}

export default SettingsListItem;