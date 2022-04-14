import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
        {
            name: 'Bagels and Lox',
            category: 'Gallery',
            description: 'Thinly sliced, smoked, alaskan salmon on a bagel topped with whipped cream cheese.',
        },
        {
            name: 'Sriracha Chops',
            category: 'Gallery',
            description: 'Grilled, orange pepper, pork tenderloin over a bead of white jasmine rice and GoGoGomez signature kale medley (corn, kale, red and orange bell peppers and shiitake mushrooms) drizzled with a Kimchi Sriracha sauce garnished with red cabbage.',
        },
        {
            name: 'Fuji Rose',
            category: 'Gallery',
            description: 'Apple cinnamon delight! a mixture of sugar, cream cheese, butter croissant and apples. Fuji apples thinly sliced and marinated in citrus juice, layered and rolled in cream cheese and coated in cinnamon sugar sprinkles.',
        },
        {
            name: 'G.O.A.T. Chicken Salad',
            category: 'Gallery',
            description: 'Field greens salad topped with pan seared chicken a la mexicana style and accompanied with Goats cheese. Garnished with seasonal select cherry tomatoes and fresh organic cabbage.',
        },
        {
            name: 'Family Chops',
            category: 'Gallery',
            description: 'Family style meal (feeds 4-5) Basted rosemary infused pork tenderloin steaks served with pan sauteed artichoke tomato salsa, homemade coleslaw, garlic-parmesan cream rice and grilled asparagus.',
        },
        {
            name: 'Andouille salad',
            category: 'Gallery',
            description: 'Pan fried andouille sausage married with caramelized tomatoes and onions on a bed of baby greens and cabbage accompanied by pimento green olives, sliced baby carrots, diced zucchini, fresh baby bella mushrooms, and pickled cilantro lime cucumber.',
        },
        {
            name: 'Celsius Chia Pudding',
            category: 'Gallery',
            description: 'Dragon fruit Celsius infused chia pudding topped with fresh cherries, blueberries, golden berries, red currant and a navel orange star.',
        },
        {
            name: 'Vanilla Chia Pudding',
            category: 'Gallery',
            description: 'Vanilla infused chia pudding topped with banana slices, pecan crumble, walnut pieces, almond slices and pumpkinseed.',
        },
        {
            name: 'Salmon Bento',
            category: 'Gallery',
            description: 'smoked Alaskan salmon stuffed rice balls featuring smoked salmon roses, a nest of wakame (seaweed salad), peach balsamic infused red cabbage, and flour shaped cucumber.',
        },
        {
            name: 'Sweet and Sour Pork',
            category: 'Gallery',
            description: 'center cut pork fillet pan fried with GoGoGomez sweet and sour sauce on a bed of field greens and a side of wedged baby rainbow carrots and sticky teff rice garnished with green scallion.',
        }, {
            name: 'Bourbon Chicken',
            category: 'Gallery',
            description: 'Bourbon steak seasoned and marinated chicken breast grilled to perfection over an open flame placed on top of a bead of tomato chicken infused couscous and a side of steamed broccoli, carrots and cauliflower.',
        },
    ]);

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



export default PhotoList;