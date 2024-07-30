import frag from '../assets/sol-erda-fragment.png'
import React from 'react';
import { StyledFragDisplay } from './styles/feature';

interface FragDisplayProps {
    cost: number;
}

const FragDisplay = ({cost}: FragDisplayProps) => {

    return (
        <StyledFragDisplay>{cost}<img className='fragment' src={frag} alt=''/></StyledFragDisplay>
    )

}

export default FragDisplay;