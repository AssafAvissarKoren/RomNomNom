import React, { useState } from 'react';
import { buttonService } from '../services/button.service.js';
import { svgSvc } from '../services/svg.service.jsx';

export const ButtonPage = () => {
    const [topColor, setTopColor] = useState('#c33737');
    const [position, setPosition] = useState({ row: 2, col: 2 }); // Default middle position

    const handleButtonClick = () => {
        const newColor = buttonService.getRandomColor(topColor);
        setTopColor(newColor);
        const newPosition = buttonService.getRandomPosition(position);
        setPosition(newPosition);
    };

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', height: '450px', width: '450px' }}>
            {Array.from({ length: 9 }).map((_, index) => (
                <div key={index}>
                    {index + 1 === (position.row - 1) * 3 + position.col ? (
                        <button className="interactive-button" onClick={handleButtonClick} style={{ justifySelf: 'center', alignSelf: 'center' }}>
                            <svgSvc.Button top_color={topColor}/>
                        </button>
                    ) : null}
                </div>
            ))}
        </div>
    );
}
