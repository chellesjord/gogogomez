import React, { useState } from 'react';

const PhotoList = ({ category }) => {
    const [photos] = useState([
        {
            name: 'Sample Name 0',
            category: 'Gallery',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Sample Name 1',
            category: 'Gallery',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Sample Name 2',
            category: 'Gallery',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Sample Name 3',
            category: 'Gallery',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Sample Name 4',
            category: 'Gallery',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Sample Name 5',
            category: 'Gallery',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Sample Name 6',
            category: 'Gallery',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Sample Name 7',
            category: 'Gallery',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Sample Name 8',
            category: 'Gallery',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Sample Name 9',
            category: 'Gallery',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Sample Name 10',
            category: 'Gallery',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },{
            name: 'Sample Name 11',
            category: 'Gallery',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
    ]);

    
    return (
        <div>
            <div className="flex-row">
                {photos.map((image, i) => (
                    <img
                        src={require(`../../assets/food_gallery/${i}.jpg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default PhotoList;