import React from 'react';
import Option from './Option/Option';
import styles from './Options.module.css';

const Options = (props) => {
    let options = null;
    if (props.container == 'warehouse') {
        options = [
            { id: 1, name: 'Add Warehouse' },
            { id: 2, name: 'Modify Warehouse' },
            { id: 3, name: 'Delete WareHouse' }
        ];
    } else if (props.container == 'home') {
        options = [
            { id: 1, name: 'Map' },
            { id: 2, name: 'Normal' },
        ];
    }

    return (
        <div className={styles.options}>
            {
                options.map(option => {
                    return (
                        <Option
                            key={option.id}
                            name={option.name}
                            currentOption={props.currentOption}
                            optionId={option.id}
                            selectOption={() => props.selectOption(option.id)}
                        />
                    );
                })
            }
        </div>
    );
};

export default Options;
