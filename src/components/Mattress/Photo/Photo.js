import React, { useState, useEffect } from 'react';

import photoClasses from './Photo.module.scss';

const Photo = (props) => {
    const [image, setImage] = useState(null);

    const loadImage = name => {
        import(`../../../assets/images/${name}-carousel.jpg`).then(image => setImage(image.default));
    };

    useEffect(() => loadImage(props.mattressId), [props.mattressId]);

    return (
        <div className={photoClasses.Photo}>
            {image && <img src={image} alt={props.mattressId} />}
        </div>
    );
};

export default Photo;
