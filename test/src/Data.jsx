import React from 'react';

const DataList = ({ items }) => {
    return (
        <div>
            {items.length > 0 ? (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p> list is impty </p>
            )}
        </div>
    );
};

export default DataList;
