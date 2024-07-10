import React from 'react';
import { StyledTracker, StyledContainer, Button } from "./styles/feature";
import Origin from '../assets/super-cannon-explosion.png'
import Hexa from '../assets/hexa-cannon-barrage.png'
import SecondHexa from '../assets/second-hexa.png'
import Core1 from '../assets/cannon-of-mass-destruction.png'
import Core2 from '../assets/monkey-business.png'
import Core3 from '../assets/poolmaker.png'
import Core4 from '../assets/the-nuclear-option.png'
import Common from '../assets/sol-janus.png'
import FragDisplay from "./FragDisplay";
import { FaArrowRotateLeft } from 'react-icons/fa6';
import Skill from '../components/Skill';
import { SKILL_TYPES } from '../constants/fragmentCost';

const DesireSkill = ({props}) => {
    const {valueDesireOri, valueDesireHexa, valueDesireSecondHexa, valueDesireEnhace1, valueDesireEnhace2, valueDesireEnhace3, valueDesireEnhace4, valueDesireCommon} = props.values
    const {setDesireOri, setDesireHexa, setDesireSecondHexa, setDesireEnhace1, setDesireEnhace2, setDesireEnhace3, setDesireEnhace4, setDesireCommon} = props.setters
    const {handleChange, calcFragCost, differenceTotalFrags, calcDesireFrag, resetSkills} = props

    return (
        <StyledTracker style={{gap: '10px'}}>
            <h4>Desired Progression</h4>
            <Skill
                value={valueDesireOri}
                setValue={setDesireOri}
                handleChange={handleChange}
                image={Origin}
                label='Origin'
                calcFragCost={calcFragCost}
                skillLabel={SKILL_TYPES.ORIGIN_FRAGMENT_COST}
            />
            <Skill
                value={valueDesireHexa}
                setValue={setDesireHexa}
                handleChange={handleChange}
                image={Hexa}
                label='HEXA Mastery'
                calcFragCost={calcFragCost}
                skillLabel={SKILL_TYPES.HEXA_MASTERY_FRAGMENT_COST}
            />
            <Skill
                value={valueDesireSecondHexa}
                setValue={setDesireSecondHexa}
                handleChange={handleChange}
                image={SecondHexa}
                label='HEXA Mastery'
                calcFragCost={calcFragCost}
                skillLabel={SKILL_TYPES.HEXA_MASTERY_FRAGMENT_COST}
            />
            <Skill
                value={valueDesireEnhace1}
                setValue={setDesireEnhace1}
                handleChange={handleChange}
                image={Core1}
                label='Enhancement Core'
                calcFragCost={calcFragCost}
                skillLabel={SKILL_TYPES.ENHANCEMENT_FRAGMENT_COST}
            />
            <Skill
                value={valueDesireEnhace2}
                setValue={setDesireEnhace2}
                handleChange={handleChange}
                image={Core2}
                label='Enhancement Core'
                calcFragCost={calcFragCost}
                skillLabel={SKILL_TYPES.ENHANCEMENT_FRAGMENT_COST}
            />
            <Skill
                value={valueDesireEnhace3}
                setValue={setDesireEnhace3}
                handleChange={handleChange}
                image={Core3}
                label='Enhancement Core'
                calcFragCost={calcFragCost}
                skillLabel={SKILL_TYPES.ENHANCEMENT_FRAGMENT_COST}
            />
            <Skill
                value={valueDesireEnhace4}
                setValue={setDesireEnhace4}
                handleChange={handleChange}
                image={Core4}
                label='Enhancement Core'
                calcFragCost={calcFragCost}
                skillLabel={SKILL_TYPES.ENHANCEMENT_FRAGMENT_COST}
            />
            <Skill
                value={valueDesireCommon}
                setValue={setDesireCommon}
                handleChange={handleChange}
                image={Common}
                label='Common Core'
                calcFragCost={calcFragCost}
                skillLabel={SKILL_TYPES.COMMON_CORE_COST}
            />
            <StyledContainer style={{ alignItems: 'center', justifyContent: "space-between" }}>
            <Button onClick={() => resetSkills()}><FaArrowRotateLeft/></Button>
            <div style={{display:'flex', alignItems:'center', gap: '10px'}}>
                <div>Total</div>
                <FragDisplay cost={calcDesireFrag} />
            </div>
            </StyledContainer>
            <StyledContainer style={{ alignItems: 'center', justifyContent: "flex-end" }}>
                <div>Difference</div>
                <FragDisplay cost={differenceTotalFrags} />
            </StyledContainer>
        </StyledTracker>
    );
};

export default DesireSkill;