import { useMemo, useState, useEffect } from "react";
import { SKILL_COST, SKILL_TYPES } from "../constants/fragmentCost";

// Define types for the state values
type FragmentValue = number;
type SetFragmentValue = React.Dispatch<React.SetStateAction<FragmentValue>>;

// Define the shape of the return object
interface UseFragmentTracker {
    values: {
      valueOri: FragmentValue;
      valueHexa: FragmentValue;
      valueSecondHexa: FragmentValue;
      valueEnhace1: FragmentValue;
      valueEnhace2: FragmentValue;
      valueEnhace3: FragmentValue;
      valueEnhace4: FragmentValue;
      valueCommon: FragmentValue;
      valueDesireOri: FragmentValue;
      valueDesireHexa: FragmentValue;
      valueDesireSecondHexa: FragmentValue;
      valueDesireEnhace1: FragmentValue;
      valueDesireEnhace2: FragmentValue;
      valueDesireEnhace3: FragmentValue;
      valueDesireEnhace4: FragmentValue;
      valueDesireCommon: FragmentValue;
    };
    setters: {
      setOri: SetFragmentValue;
      setHexa: SetFragmentValue;
      setSecondHexa: SetFragmentValue;
      setEnhace1: SetFragmentValue;
      setEnhace2: SetFragmentValue;
      setEnhace3: SetFragmentValue;
      setEnhace4: SetFragmentValue;
      setCommon: SetFragmentValue;
      setDesireOri: SetFragmentValue;
      setDesireHexa: SetFragmentValue;
      setDesireSecondHexa: SetFragmentValue;
      setDesireEnhace1: SetFragmentValue;
      setDesireEnhace2: SetFragmentValue;
      setDesireEnhace3: SetFragmentValue;
      setDesireEnhace4: SetFragmentValue;
      setDesireCommon: SetFragmentValue;
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>, setter: SetFragmentValue) => void;
    calcFragCost: (skill: string, value: number) => number;
    resetSkills: (value: 'Current' | 'Desire') => void;
    calcSkillPercentage: (current: number, desire: number) => number;
    calcTotalFrag: number;
    calcDesireFrag: number;
    differenceTotalFrags: number;
}

const useFragmentTracker = () => {
    const getInitialState = (key: string, initialValue: number) => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    };

    // Current Level
    const [valueOri, setOri] = useState<FragmentValue>(getInitialState('valueOri', 1));
    const [valueHexa, setHexa] = useState<FragmentValue>(getInitialState('valueHexa', 0));
    const [valueSecondHexa, setSecondHexa] = useState<FragmentValue>(getInitialState('valueSecondHexa', 0));
    const [valueEnhace1, setEnhace1] = useState<FragmentValue>(getInitialState('valueEnhace1', 0));
    const [valueEnhace2, setEnhace2] = useState<FragmentValue>(getInitialState('valueEnhace2', 0));
    const [valueEnhace3, setEnhace3] = useState<FragmentValue>(getInitialState('valueEnhace3', 0));
    const [valueEnhace4, setEnhace4] = useState<FragmentValue>(getInitialState('valueEnhace4', 0));
    const [valueCommon, setCommon] = useState<FragmentValue>(getInitialState('valueCommon', 0));


    // Desire Level
    const INITIAL_DESIRE_VALUE = 30;
    const [valueDesireOri, setDesireOri] = useState<FragmentValue>(getInitialState('valueDesireOri', INITIAL_DESIRE_VALUE));
    const [valueDesireHexa, setDesireHexa] = useState<FragmentValue>(getInitialState('valueDesireHexa', INITIAL_DESIRE_VALUE));
    const [valueDesireSecondHexa, setDesireSecondHexa] = useState<FragmentValue>(getInitialState('valueDesireSecondHexa', INITIAL_DESIRE_VALUE));
    const [valueDesireEnhace1, setDesireEnhace1] = useState<FragmentValue>(getInitialState('valueDesireEnhace1', INITIAL_DESIRE_VALUE));
    const [valueDesireEnhace2, setDesireEnhace2] = useState<FragmentValue>(getInitialState('valueDesireEnhace2', INITIAL_DESIRE_VALUE));
    const [valueDesireEnhace3, setDesireEnhace3] = useState<FragmentValue>(getInitialState('valueDesireEnhace3', INITIAL_DESIRE_VALUE));
    const [valueDesireEnhace4, setDesireEnhace4] = useState<FragmentValue>(getInitialState('valueDesireEnhace4', INITIAL_DESIRE_VALUE));
    const [valueDesireCommon, setDesireCommon] = useState<FragmentValue>(getInitialState('valueDesireCommon', INITIAL_DESIRE_VALUE));

    useEffect(() => {
        localStorage.setItem('valueOri', JSON.stringify(valueOri));
        localStorage.setItem('valueHexa', JSON.stringify(valueHexa));
        localStorage.setItem('valueSecondHexa', JSON.stringify(valueSecondHexa));
        localStorage.setItem('valueEnhace1', JSON.stringify(valueEnhace1));
        localStorage.setItem('valueEnhace2', JSON.stringify(valueEnhace2));
        localStorage.setItem('valueEnhace3', JSON.stringify(valueEnhace3));
        localStorage.setItem('valueEnhace4', JSON.stringify(valueEnhace4));
        localStorage.setItem('valueCommon', JSON.stringify(valueCommon));
        localStorage.setItem('valueDesireOri', JSON.stringify(valueDesireOri));
        localStorage.setItem('valueDesireHexa', JSON.stringify(valueDesireHexa));
        localStorage.setItem('valueDesireSecondHexa', JSON.stringify(valueDesireSecondHexa));
        localStorage.setItem('valueDesireEnhace1', JSON.stringify(valueDesireEnhace1));
        localStorage.setItem('valueDesireEnhace2', JSON.stringify(valueDesireEnhace2));
        localStorage.setItem('valueDesireEnhace3', JSON.stringify(valueDesireEnhace3));
        localStorage.setItem('valueDesireEnhace4', JSON.stringify(valueDesireEnhace4));
        localStorage.setItem('valueDesireCommon', JSON.stringify(valueDesireCommon));
    }, [valueOri, valueHexa, valueSecondHexa, valueEnhace1, valueEnhace2, valueEnhace3, valueEnhace4, valueCommon,
        valueDesireOri, valueDesireHexa, valueDesireSecondHexa, valueDesireEnhace1, valueDesireEnhace2, valueDesireEnhace3, valueDesireEnhace4, valueDesireCommon]);

    const calcSkillPercentage = (current: number, desire: number) => {
        return current/desire
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setter: SetFragmentValue) => {
        const newValue = Number(e.target.value);
        setter(newValue);
    };

    const resetSkills = (value: 'Current' | 'Desire') => {
        if(value === 'Current'){
            setOri(1)
            setHexa(0)
            setSecondHexa(0)
            setEnhace1(0)
            setEnhace2(0)
            setEnhace3(0)
            setEnhace4(0)
            setCommon(0)
        }
        else{
            setDesireOri(30)
            setDesireHexa(30)
            setDesireSecondHexa(30)
            setDesireEnhace1(30)
            setDesireEnhace2(30)
            setDesireEnhace3(30)
            setDesireEnhace4(30)
            setDesireCommon(30)
        }
    }

    const calcFragCost = (skill: string, value: number) => {
        if (value < 0) return 0;
        if (value > 30) return 30;

        let fragSum = 0;
        const skillArray = SKILL_COST[skill]

        for (let i = 0; i < value; i++){
            fragSum += skillArray[i]
        }

        return fragSum;
    };

    const calcTotalFrag = useMemo(() => {
        return (calcFragCost(SKILL_TYPES.ORIGIN_FRAGMENT_COST, valueOri) +
            calcFragCost(SKILL_TYPES.HEXA_MASTERY_FRAGMENT_COST, valueHexa) +
            calcFragCost(SKILL_TYPES.HEXA_MASTERY_FRAGMENT_COST, valueSecondHexa) +
            calcFragCost(SKILL_TYPES.ENHANCEMENT_FRAGMENT_COST, valueEnhace1) +
            calcFragCost(SKILL_TYPES.ENHANCEMENT_FRAGMENT_COST, valueEnhace2) +
            calcFragCost(SKILL_TYPES.ENHANCEMENT_FRAGMENT_COST, valueEnhace3) +
            calcFragCost(SKILL_TYPES.ENHANCEMENT_FRAGMENT_COST, valueEnhace4) +
            calcFragCost(SKILL_TYPES.COMMON_CORE_COST, valueCommon))
    }, [valueOri, valueHexa, valueSecondHexa, valueEnhace1, valueEnhace2, valueEnhace3, valueEnhace4, valueCommon]);

    const calcDesireFrag = useMemo(() => {
        return (calcFragCost(SKILL_TYPES.ORIGIN_FRAGMENT_COST, valueDesireOri) +
            calcFragCost(SKILL_TYPES.HEXA_MASTERY_FRAGMENT_COST, valueDesireHexa) +
            calcFragCost(SKILL_TYPES.HEXA_MASTERY_FRAGMENT_COST, valueDesireSecondHexa) +
            calcFragCost(SKILL_TYPES.ENHANCEMENT_FRAGMENT_COST, valueDesireEnhace1) +
            calcFragCost(SKILL_TYPES.ENHANCEMENT_FRAGMENT_COST, valueDesireEnhace2) +
            calcFragCost(SKILL_TYPES.ENHANCEMENT_FRAGMENT_COST, valueDesireEnhace3) +
            calcFragCost(SKILL_TYPES.ENHANCEMENT_FRAGMENT_COST, valueDesireEnhace4) +
            calcFragCost(SKILL_TYPES.COMMON_CORE_COST, valueDesireCommon))
    },[valueDesireOri, valueDesireHexa, valueDesireSecondHexa, valueDesireEnhace1, valueDesireEnhace2, valueDesireEnhace3, valueDesireEnhace4, valueDesireCommon])

    const differenceTotalFrags = useMemo(():number => {
        return calcDesireFrag - calcTotalFrag
    }, [calcDesireFrag, calcTotalFrag])

    return {
        values: {
            valueOri, valueHexa, valueSecondHexa, valueEnhace1, valueEnhace2, valueEnhace3, valueEnhace4, valueCommon, valueDesireOri, valueDesireHexa, valueDesireSecondHexa, valueDesireEnhace1, valueDesireEnhace2, valueDesireEnhace3, valueDesireEnhace4, valueDesireCommon
        },
        setters: {
            setOri, setHexa, setSecondHexa, setEnhace1, setEnhace2, setEnhace3, setEnhace4, setCommon, setDesireOri, setDesireHexa, setDesireSecondHexa, setDesireEnhace1, setDesireEnhace2, setDesireEnhace3, setDesireEnhace4, setDesireCommon
        },
        handleChange,
        calcFragCost,
        resetSkills,
        calcSkillPercentage,
        calcTotalFrag,
        calcDesireFrag,
        differenceTotalFrags
    };
};

export default useFragmentTracker;