import frag from '../assets/sol-erda-fragment.png'
import { StyledFragDisplay } from './styles/feature';

const FragDisplay = ({cost}) => {


    return (
        <StyledFragDisplay>{cost}<img className='fragment' src={frag} alt=''/></StyledFragDisplay>
    )

}

export default FragDisplay;