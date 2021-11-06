import React from "react";

const READABLE_KEY_MAP = {
    special_attack: 'Sp. Atk.',
    special_defense: 'Sp. Def.',
}

const toReadableKey = (key) => {
    return READABLE_KEY_MAP[key] || key[0].toUpperCase() + key.substring(1);
}  

const toReadableValue = (key, value) => {
    if (key === 'category') {
        return value[0].toUpperCase() + value.substring(1);
    } else if (key === 'abilities') {
        console.log(value);
        return (
            <React.Fragment>
                {
                    value.map((ability, i) => (
                        <React.Fragment key={i}>
                            <span className="value-ability">
                                {ability}
                            </span>
                            { i < value.length ? <br/> : null }
                        </React.Fragment>
                    ))
                }
            </React.Fragment>
        );
    } else if (key === 'category') {
        return (
            <span className="value-category">
                {value}
            </span>
        );
    }
    return value;
}

const PokemonStatsTable = ({stats, keys, extraClasses}) => (
    <div className={`pokemon-stats-table ${extraClasses}`}>
        <table>
            <tbody>
                {
                    keys.map((key) => (
                        <tr key={key}>
                            <td className="key-cell">{toReadableKey(key)}</td>
                            <td className="value-cell"><b>{toReadableValue(key, stats[key])}</b></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
)



export default PokemonStatsTable;