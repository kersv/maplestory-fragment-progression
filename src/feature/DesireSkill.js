import React from 'react';
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

const DesireSkill = ({props}) => {
    const {valueDesireOri, valueDesireHexa, valueDesireSecondHexa, valueDesireEnhace1, valueDesireEnhace2, valueDesireEnhace3, valueDesireEnhace4, valueDesireCommon} = props.values
    const {setDesireOri, setDesireHexa, setDesireSecondHexa, setDesireEnhace1, setDesireEnhace2, setDesireEnhace3, setDesireEnhace4, setDesireCommon} = props.setters
    const {handleChange, calcFragCost, differenceTotalFrags, calcDesireFrag} = props

    return (
        <StyledTracker>
            <h4>Desired Progression</h4>
            <StyledContainer>
                <StyledInput type="number" value={valueDesireOri} onChange={(e) => handleChange(e, setDesireOri)} min="0" max="30" />
                <span style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                    <StyledSkill><img className="skill-img" src={Origin} alt="" />Origin</StyledSkill>
                    <FragDisplay cost={calcFragCost('Origin', valueDesireOri)} />
                </span>
            </StyledContainer>

            <StyledContainer>
                <StyledInput type="number" value={valueDesireHexa} onChange={(e) => handleChange(e, setDesireHexa)} min="0" max="30" />
                <span>
                    <StyledSkill><img className="skill-img" src={Hexa} alt="" />HEXA Mastery</StyledSkill>
                    <FragDisplay cost={calcFragCost('HEXA', valueDesireHexa)} />
                </span>
            </StyledContainer>

            <StyledContainer>
                <StyledInput type="number" value={valueDesireSecondHexa} onChange={(e) => handleChange(e, setDesireSecondHexa)} min="0" max="30" />
                <span>
                    <StyledSkill><img className="skill-img" src={SecondHexa} alt="" />Second HEXA Mastery</StyledSkill>
                    <FragDisplay cost={calcFragCost('HEXA', valueDesireSecondHexa)} />
                </span>
            </StyledContainer>

            <StyledContainer>
                <StyledInput type="number" value={valueDesireEnhace1} onChange={(e) => handleChange(e, setDesireEnhace1)} min="0" max="30" />
                <span>
                    <StyledSkill><img className="skill-img" src={Core1} alt="" />Enhancement Core 1</StyledSkill>
                    <FragDisplay cost={calcFragCost('Enhancement', valueDesireEnhace1)} />
                </span>
            </StyledContainer>

            <StyledContainer>
                <StyledInput type="number" value={valueDesireEnhace2} onChange={(e) => handleChange(e, setDesireEnhace2)} min="0" max="30" />
                <span>
                    <StyledSkill><img className="skill-img" src={Core2} alt="" />Enhancement Core 2</StyledSkill>
                    <FragDisplay cost={calcFragCost('Enhancement', valueDesireEnhace2)} />
                </span>
            </StyledContainer>

            <StyledContainer>
                <StyledInput type="number" value={valueDesireEnhace3} onChange={(e) => handleChange(e, setDesireEnhace3)} min="0" max="30" />
                <span>
                    <StyledSkill><img className="skill-img" src={Core3} alt="" />Enhancement Core 3</StyledSkill>
                    <FragDisplay cost={calcFragCost('Enhancement', valueDesireEnhace3)} />
                </span>
            </StyledContainer>

            <StyledContainer>
                <StyledInput type="number" value={valueDesireEnhace4} onChange={(e) => handleChange(e, setDesireEnhace4)} min="0" max="30" />
                <span>
                    <StyledSkill><img className="skill-img" src={Core4} alt="" />Enhancement Core 4</StyledSkill>
                    <FragDisplay cost={calcFragCost('Enhancement', valueDesireEnhace4)} />
                </span>
            </StyledContainer>

            <StyledContainer>
                <StyledInput type="number" value={valueDesireCommon} onChange={(e) => handleChange(e, setDesireCommon)} min="0" max="30" />
                <span>
                    <StyledSkill><img className="skill-img" src={Common} alt="" />Common Core</StyledSkill>
                    <FragDisplay cost={calcFragCost('Common', valueDesireCommon)} />
                </span>
            </StyledContainer>

            <StyledContainer style={{ alignItems: 'center', justifyContent: "flex-end" }}>
                <div>Total</div>
                <FragDisplay cost={calcDesireFrag} />
            </StyledContainer>

            {/* Difference */}
            <StyledContainer style={{ alignItems: 'center', justifyContent: "flex-end" }}>
                <div>Difference</div>
                <FragDisplay cost={differenceTotalFrags} />
            </StyledContainer>
        </StyledTracker>
    );
};

export default DesireSkill;