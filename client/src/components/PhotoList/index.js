import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
        {
            name: 'Food Item 1',
            category: 'Gallery',
            description: 'Something amazing should be here',
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
        }, {
            name: 'Sample Name 11',
            category: 'Gallery',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
    ]);

<<<<<<< HEAD
    const currentPhotos = photos.filter(photo => photo.category === category);

    const toggleModal = (image, i) => {
        setCurrentPhoto({ ...image, index: i });
        setIsModalOpen(!isModalOpen);  
    }

    

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/food_gallery/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
}
=======
    const toggleModal = (image, i) => {
        setCurrentPhoto({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div>
          {isModalOpen && (
            <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
          )}
          <div className="flex-row">
          {photos.map((image, i) => (
              <img
                src={require(`../../assets/food_gallery/${i}.jpg`)}
                alt={image.name}
                className="img-thumbnail mx-1"
                onClick={() => toggleModal(image, i)}
                key={image.name}
              />
            ))}
          </div>
        </div>
      );
};


>>>>>>> develop

export default PhotoList;