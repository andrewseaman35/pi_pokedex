import React from "react";
import { STATES } from "../js/constants";

import SettingsListItem from './SettingsListItem';


const SettingsList = ({items, activeIndex}) => {
    return (
        <div className="pokemon-list">
            {
                items.map((item, i) => (
                    <SettingsListItem
                        key={i}
                        item={item}
                        state={i === activeIndex ? STATES.ACTIVE : null}
                    />
                ))
            }
        </div>
    )
}

export default SettingsList;