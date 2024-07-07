
import { StyledTracker, StyledSkill, StyledInput, StyledContainer } from "./styles/feature";
import Origin from '../assets/super-cannon-explosion.png'
import Hexa from '../assets/hexa-cannon-barrage.png'
import SecondHexa from '../assets/second-hexa.png'
import Core1 from '../assets/cannon-of-mass-destruction.png'
import Core2 from '../assets/monkey-business.png'
import Core3 from '../assets/poolmaker.png'
import Core4 from '../assets/the-nuclear-option.png'
import Common from '../assets/sol-janus.png'
import FragDisplay from "./FragDisplay";
import { FaArrowRotateLeft } from "react-icons/fa6";

const Tracker = ({props}) => {
    const {valueOri, valueHexa, valueSecondHexa, valueEnhace1, valueEnhace2, valueEnhace3, valueEnhace4, valueCommon, valueDesireOri, valueDesireHexa, valueDesireSecondHexa, valueDesireEnhace1, valueDesireEnhace2, valueDesireEnhace3, valueDesireEnhace4, valueDesireCommon} = props.values
    const {setOri, setHexa, setSecondHexa, setEnhace1, setEnhace2, setEnhace3, setEnhace4, setCommon} = props.setters
    const {handleChange, calcFragCost, calcTotalFrag, resetSkills, calcSkillPercentage} = props

    return (
        <StyledTracker>
            <h4>Current Progression</h4>
            <StyledContainer>
                <StyledInput type="number" value={valueOri} onChange={(e) => handleChange(e, setOri)} min="0" max="30"/>
                <span style={{display:'flex', width: '100%', justifyContent:'space-between'}}>
                    <StyledSkill><img className="skill-img" src={Origin} alt=""/>Origin</StyledSkill>
                    <FragDisplay cost={calcFragCost('Origin', valueOri)}/>
                </span>
            </StyledContainer>
            <progress value={calcSkillPercentage(valueOri, valueDesireOri)} style={{margin: '0 10px 0 10px', width: 'auto'}}/>

            <StyledContainer>
                <StyledInput type="number" value={valueHexa} onChange={(e) => handleChange(e, setHexa)} min="0" max="30"/>
                <span>
                    <StyledSkill><img className="skill-img" src={Hexa} alt=""/>HEXA Mastery</StyledSkill>
                    <FragDisplay cost={calcFragCost('HEXA', valueHexa)} />
                </span>
            </StyledContainer>
            <progress value={calcSkillPercentage(valueHexa, valueDesireHexa)} style={{margin: '0 10px 0 10px', width: 'auto'}}/>

            <StyledContainer>
                <StyledInput type="number" value={valueSecondHexa} onChange={(e) => handleChange(e, setSecondHexa)} min="0" max="30"/>
                <span>
                    <StyledSkill><img className="skill-img" src={SecondHexa} alt=""/>Second HEXA Mastery</StyledSkill>
                    <FragDisplay cost={calcFragCost('HEXA', valueSecondHexa)}/>
                </span>
            </StyledContainer>
            <progress value={calcSkillPercentage(valueSecondHexa, valueDesireSecondHexa)} style={{margin: '0 10px 0 10px', width: 'auto'}}/>

            <StyledContainer>
                <StyledInput type="number" value={valueEnhace1} onChange={(e) => handleChange(e, setEnhace1)} min="0" max="30"/>
                <span>
                    <StyledSkill><img className="skill-img" src={Core1} alt=""/>Enhancement Core 1</StyledSkill>
                    <FragDisplay cost={calcFragCost('Enhancement', valueEnhace1)}/>
                </span>
            </StyledContainer>
            <progress value={calcSkillPercentage(valueEnhace1, valueDesireEnhace1)} style={{margin: '0 10px 0 10px', width: 'auto'}}/>

            <StyledContainer>
                <StyledInput type="number" value={valueEnhace2} onChange={(e) => handleChange(e, setEnhace2)} min="0" max="30"/>
                <span>
                    <StyledSkill><img className="skill-img" src={Core2} alt=""/>Enhancement Core 2</StyledSkill>
                    <FragDisplay cost={calcFragCost('Enhancement', valueEnhace2)}/>
                </span>
            </StyledContainer>
            <progress value={calcSkillPercentage(valueEnhace2, valueDesireEnhace2)} style={{margin: '0 10px 0 10px', width: 'auto'}}/>

            <StyledContainer>
                <StyledInput type="number" value={valueEnhace3} onChange={(e) => handleChange(e, setEnhace3)} min="0" max="30"/>
                <span>
                    <StyledSkill><img className="skill-img" src={Core3} alt=""/>Enhancement Core 3</StyledSkill>
                    <FragDisplay cost={calcFragCost('Enhancement', valueEnhace3)}/>
                </span>
            </StyledContainer>
            <progress value={calcSkillPercentage(valueEnhace3, valueDesireEnhace3)} style={{margin: '0 10px 0 10px', width: 'auto'}}/>

            <StyledContainer>
                <StyledInput type="number" value={valueEnhace4} onChange={(e) => handleChange(e, setEnhace4)} min="0" max="30"/>
                <span>
                    <StyledSkill><img className="skill-img" src={Core4} alt=""/>Enhancement Core 4</StyledSkill>
                    <FragDisplay cost={calcFragCost('Enhancement', valueEnhace4)}/>
                </span>
            </StyledContainer>
            <progress value={calcSkillPercentage(valueEnhace4, valueDesireEnhace4)} style={{margin: '0 10px 0 10px', width: 'auto'}}/>

            <StyledContainer>
                <StyledInput type="number" value={valueCommon} onChange={(e) => handleChange(e, setCommon)} min="0" max="30"/>
                <span>
                    <StyledSkill><img className="skill-img" src={Common} alt=""/>Common Core</StyledSkill>
                    <FragDisplay cost={calcFragCost('Common', valueCommon)}/>
                </span>
            </StyledContainer>
            <progress value={calcSkillPercentage(valueCommon, valueDesireCommon)} style={{margin: '0 10px 0 10px', width: 'auto'}}/>

            <StyledContainer style={{alignItems:'center', justifyContent:"space-between"}}>
                <button onClick={() => resetSkills('Current')} style={{background: 'transparent', color: 'white', outline: 'none', cursor: 'pointer', padding: '10px', fontSize: '1.5em', border:'none'}}><FaArrowRotateLeft/></button>
                <div style={{display:'flex', alignItems:'center', gap: '10px'}}>
                    <div>Total</div>
                    <FragDisplay cost={calcTotalFrag}/>
                </div>
            </StyledContainer>
        </StyledTracker>
    )
};

export default Tracker;