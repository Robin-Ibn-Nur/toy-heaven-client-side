import { Image } from '@nextui-org/react';
import React from 'react';
import bossBaby from "../../../../public/The-Boss-Baby-Movie-PNG-180x180.png"

const BossBaby = () => {
    return (
        <Image width={100}
            height={200}
            fallbackSrc="https://via.placeholder.com/300x200" src={bossBaby} />
    );
};

export default BossBaby;