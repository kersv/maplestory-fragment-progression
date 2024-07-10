import { StyledContainer, StyledInput, StyledSkill} from "../feature/styles/feature"
import FragDisplay from "../feature/FragDisplay"

const Skill = ({value, setValue, handleChange, image, label, calcFragCost}) => {

    return (
        <StyledContainer>
            <StyledInput type="number" value={value} onChange={(e) => handleChange(e, setValue)} min="0" max="30" />            
            <span style={{display:'flex', width: '100%', justifyContent:'space-between'}}>
                <StyledSkill><img className="skill-img" src={image} alt=""/>{label}</StyledSkill>
                <FragDisplay cost={calcFragCost(label, value)}/>
            </span>
        </StyledContainer>
    )
}

export default Skill