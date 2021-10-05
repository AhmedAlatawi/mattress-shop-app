import React, { useState } from 'react';

import mattressClasses from './Mattress.module.scss';
import Photo from './Photo/Photo';
import PanelControls from './PanelControls/PanelControls';

const Mattress = (props) => {
    const [selectedMattressId, setSelectedMattressId] = useState('classic');

    const selectedMattressHandler = (mattress) => {
        setSelectedMattressId(mattress.id);
        console.log(mattress)
    };

    return (
        <div className={mattressClasses.Container}>
            <div className={mattressClasses.Mattress}>
                <div className={mattressClasses.Photo}>
                    <Photo mattressId={selectedMattressId} />
                </div>
                <div className={mattressClasses.PanelControls}>
                    <PanelControls
                        itemAdded={props.itemAdded}
                        selectedMattress={selectedMattressHandler}
                        mattresses={props.data} />
                </div>
            </div>
        </div>
    );
}

export default Mattress;
