
import { StyledTracker, StyledContainer } from "./styles/feature";
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
import Skill from "../components/Skill";
import { SKILL_TYPES } from "../constants/fragmentCost";

const Tracker = ({props}) => {
    const {valueOri, valueHexa, valueSecondHexa, valueEnhace1, valueEnhace2, valueEnhace3, valueEnhace4, valueCommon, valueDesireOri, valueDesireHexa, valueDesireSecondHexa, valueDesireEnhace1, valueDesireEnhace2, valueDesireEnhace3, valueDesireEnhace4, valueDesireCommon} = props.values
    const {setOri, setHexa, setSecondHexa, setEnhace1, setEnhace2, setEnhace3, setEnhace4, setCommon} = props.setters
    const {handleChange, calcFragCost, calcTotalFrag, resetSkills, calcSkillPercentage} = props

    return (
        <StyledTracker>
            <h4>Current Progression</h4>
            <Skill
                value={valueOri}
                setValue={setOri}
                handleChange={handleChange}
                image={Origin}
                label="Origin"
                calcFragCost={calcFragCost}
                skillLabel={SKILL_TYPES.ORIGIN_FRAGMENT_COST}
            />
            <progress value={calcSkillPercentage(valueOri, valueDesireOri)} style={{margin: '0 10px 0 10px', width: 'auto'}}/>

            <Skill
                value={valueHexa}
                setValue={setHexa}
                handleChange={handleChange}
                image={Hexa}
                label='HEXA Mastery'
                calcFragCost={calcFragCost}
                skillLabel={SKILL_TYPES.HEXA_MASTERY_FRAGMENT_COST}
            />
            <progress value={calcSkillPercentage(valueHexa, valueDesireHexa)} style={{margin: '0 10px 0 10px', width: 'auto'}}/>

            <Skill
                value={valueSecondHexa}
                setValue={setSecondHexa}
                handleChange={handleChange}
                image={SecondHexa}
                label='HEXA Mastery'
                calcFragCost={calcFragCost}
                skillLabel={SKILL_TYPES.HEXA_MASTERY_FRAGMENT_COST}
            />
            <progress value={calcSkillPercentage(valueSecondHexa, valueDesireSecondHexa)} style={{margin: '0 10px 0 10px', width: 'auto'}}/>

            <Skill
                value={valueEnhace1}
                setValue={setEnhace1}
                handleChange={handleChange}
                image={Core1}
                label='Enhancement Core'
                calcFragCost={calcFragCost}
                skillLabel={SKILL_TYPES.ENHANCEMENT_FRAGMENT_COST}
            />
            <progress value={calcSkillPercentage(valueEnhace1, valueDesireEnhace1)} style={{margin: '0 10px 0 10px', width: 'auto'}}/>

            <Skill
                value={valueEnhace2}
                setValue={setEnhace2}
                handleChange={handleChange}
                image={Core2}
                label='Enhancement Core'
                calcFragCost={calcFragCost}
                skillLabel={SKILL_TYPES.ENHANCEMENT_FRAGMENT_COST}
            />
            <progress value={calcSkillPercentage(valueEnhace2, valueDesireEnhace2)} style={{margin: '0 10px 0 10px', width: 'auto'}}/>

            <Skill
                value={valueEnhace3}
                setValue={setEnhace3}
                handleChange={handleChange}
                image={Core3}
                label='Enhancement Core'
                calcFragCost={calcFragCost}
                skillLabel={SKILL_TYPES.ENHANCEMENT_FRAGMENT_COST}
            />
            <progress value={calcSkillPercentage(valueEnhace3, valueDesireEnhace3)} style={{margin: '0 10px 0 10px', width: 'auto'}}/>

            <Skill
                value={valueEnhace4}
                setValue={setEnhace4}
                handleChange={handleChange}
                image={Core4}
                label='Enhancement Core'
                calcFragCost={calcFragCost}
                skillLabel={SKILL_TYPES.ENHANCEMENT_FRAGMENT_COST}
            />
            <progress value={calcSkillPercentage(valueEnhace4, valueDesireEnhace4)} style={{margin: '0 10px 0 10px', width: 'auto'}}/>

            <Skill
                value={valueCommon}
                setValue={setCommon}
                handleChange={handleChange}
                image={Common}
                label='Common Core'
                calcFragCost={calcFragCost}
                skillLabel={SKILL_TYPES.COMMON_CORE_COST}
            />
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