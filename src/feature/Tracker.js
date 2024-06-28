import useFragmentTracker from "./useFragmentTracker";
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

const Tracker = () => {
    const {
        values: {valueOri, valueHexa, valueSecondHexa, valueEnhace1, valueEnhace2, valueEnhace3, valueEnhace4, valueCommon},
        setters: {setOri, setHexa, setSecondHexa, setEnhace1, setEnhace2, setEnhace3, setEnhace4, setCommon},
        handleChange,
        calcFragCost,
        calcTotalFrag
    } = useFragmentTracker();

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

            <StyledContainer>
                <StyledInput type="number" value={valueHexa} onChange={(e) => handleChange(e, setHexa)} min="0" max="30"/>
                <span>
                    <StyledSkill><img className="skill-img" src={Hexa} alt=""/>HEXA Mastery</StyledSkill>
                    <FragDisplay cost={calcFragCost('HEXA', valueHexa)}/>
                </span>
            </StyledContainer>

            <StyledContainer>
                <StyledInput type="number" value={valueSecondHexa} onChange={(e) => handleChange(e, setSecondHexa)} min="0" max="30"/>
                <span>
                    <StyledSkill><img className="skill-img" src={SecondHexa} alt=""/>Second HEXA Mastery</StyledSkill>
                    <FragDisplay cost={calcFragCost('HEXA', valueSecondHexa)}/>
                </span>
            </StyledContainer>

            <StyledContainer>
                <StyledInput type="number" value={valueEnhace1} onChange={(e) => handleChange(e, setEnhace1)} min="0" max="30"/>
                <span>
                    <StyledSkill><img className="skill-img" src={Core1} alt=""/>Enhancement Core 1</StyledSkill>
                    <FragDisplay cost={calcFragCost('Enhancement', valueEnhace1)}/>
                </span>
            </StyledContainer>

            <StyledContainer>
                <StyledInput type="number" value={valueEnhace2} onChange={(e) => handleChange(e, setEnhace2)} min="0" max="30"/>
                <span>
                    <StyledSkill><img className="skill-img" src={Core2} alt=""/>Enhancement Core 2</StyledSkill>
                    <FragDisplay cost={calcFragCost('Enhancement', valueEnhace2)}/>
                </span>
            </StyledContainer>

            <StyledContainer>
                <StyledInput type="number" value={valueEnhace3} onChange={(e) => handleChange(e, setEnhace3)} min="0" max="30"/>
                <span>
                    <StyledSkill><img className="skill-img" src={Core3} alt=""/>Enhancement Core 3</StyledSkill>
                    <FragDisplay cost={calcFragCost('Enhancement', valueEnhace3)}/>
                </span>
            </StyledContainer>

            <StyledContainer>
                <StyledInput type="number" value={valueEnhace4} onChange={(e) => handleChange(e, setEnhace4)} min="0" max="30"/>
                <span>
                    <StyledSkill><img className="skill-img" src={Core4} alt=""/>Enhancement Core 4</StyledSkill>
                    <FragDisplay cost={calcFragCost('Enhancement', valueEnhace4)}/>
                </span>
            </StyledContainer>

            <StyledContainer>
                <StyledInput type="number" value={valueCommon} onChange={(e) => handleChange(e, setCommon)} min="0" max="30"/>
                <span>
                    <StyledSkill><img className="skill-img" src={Common} alt=""/>Common Core</StyledSkill>
                    <FragDisplay cost={calcFragCost('Common', valueCommon)}/>
                </span>
            </StyledContainer>

            <StyledContainer style={{alignItems:'center', justifyContent:"flex-end"}}>
                <div>Total</div>
                <FragDisplay cost={calcTotalFrag}/>
            </StyledContainer>
        </StyledTracker>
    )
};

export default Tracker;