import React, { useState } from 'react';

const DropdownMenu = ({ trigger, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-container">
            <div className="dropdown-trigger" onClick={toggleDropdown}>
                {trigger}
            </div>
            {isOpen && (
                <ul className="dropdown-menu">
                    {items.map((item, index) => (
                        <li key={index} onClick={item.onClick}>
                            {item.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;