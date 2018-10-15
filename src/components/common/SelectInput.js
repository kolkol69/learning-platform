import React, {PropTypes} from 'react'

const SelectInput = ({ name, label, onChange, defaultOption, value, error, options }) => {
    return (
        <div calssName="form-group">
            <label htmlFor={name}>{label}</label>
            <div className="filed">
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="form-control"
                >
                    <option value="">{defaultOption}</option>
                    {options.map((option) => (
                        <option
                            key={option.key}
                            value={option.value}
                        >{option.next}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultOption: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput
