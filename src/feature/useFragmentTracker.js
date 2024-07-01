import { useMemo, useState } from "react";
import { ORIGIN_FRAGMENT_COST, HEXA_MASTERY_FRAGMENT_COST, ENHANCEMENT_FRAGMENT_COST, COMMON_CORE_COST } from "../constants/fragmentCost";

const useFragmentTracker = () => {
    // Current Level
    const [valueOri, setOri] = useState(1);
    const [valueHexa, setHexa] = useState(0);
    const [valueSecondHexa, setSecondHexa] = useState(0);
    const [valueEnhace1, setEnhace1] = useState(0);
    const [valueEnhace2, setEnhace2] = useState(0);
    const [valueEnhace3, setEnhace3] = useState(0);
    const [valueEnhace4, setEnhace4] = useState(0);
    const [valueCommon, setCommon] = useState(0);

    // Desire Level
    const [valueDesireOri, setDesireOri] = useState(30);
    const [valueDesireHexa, setDesireHexa] = useState(30);
    const [valueDesireSecondHexa, setDesireSecondHexa] = useState(30);
    const [valueDesireEnhace1, setDesireEnhace1] = useState(30);
    const [valueDesireEnhace2, setDesireEnhace2] = useState(30);
    const [valueDesireEnhace3, setDesireEnhace3] = useState(30);
    const [valueDesireEnhace4, setDesireEnhace4] = useState(30);
    const [valueDesireCommon, setDesireCommon] = useState(30);

    const handleChange = (e, setter) => {
        const newValue = Number(e.target.value);
        setter(newValue);
    };

    const calcFragCost = (skill, value) => {
        if (value < 0) {
            return 0;
        } else if (value > 30) {
            value = 30;
        }

        let fragSum = 0;
        if (skill === 'Origin') {
            for (let i = 0; i < value; i++) {
                fragSum += ORIGIN_FRAGMENT_COST[i];
            }
        } else if (skill === 'HEXA') {
            for (let i = 0; i < value; i++) {
                fragSum += HEXA_MASTERY_FRAGMENT_COST[i];
            }
        } else if (skill === 'Enhancement') {
            for (let i = 0; i < value; i++) {
                fragSum += ENHANCEMENT_FRAGMENT_COST[i];
            }
        } else if (skill === 'Common') {
            for (let i = 0; i < value; i++) {
                fragSum += COMMON_CORE_COST[i];
            }
        }
        return fragSum;
    };

    const calcTotalFrag = useMemo(() => {
        return (calcFragCost('Origin', valueOri) +
            calcFragCost('HEXA', valueHexa) +
            calcFragCost('HEXA', valueSecondHexa) +
            calcFragCost('Enhancement', valueEnhace1) +
            calcFragCost('Enhancement', valueEnhace2) +
            calcFragCost('Enhancement', valueEnhace3) +
            calcFragCost('Enhancement', valueEnhace4) +
            calcFragCost('Common', valueCommon))
    }, [valueOri, valueHexa, valueSecondHexa, valueEnhace1, valueEnhace2, valueEnhace3, valueEnhace4, valueCommon]);

    const calcDesireFrag = useMemo(() => {
        return (calcFragCost('Origin', valueDesireOri) +
            calcFragCost('HEXA', valueDesireHexa) +
            calcFragCost('HEXA', valueDesireSecondHexa) +
            calcFragCost('Enhancement', valueDesireEnhace1) +
            calcFragCost('Enhancement', valueDesireEnhace2) +
            calcFragCost('Enhancement', valueDesireEnhace3) +
            calcFragCost('Enhancement', valueDesireEnhace4) +
            calcFragCost('Common', valueDesireCommon))
    },[valueDesireOri, valueDesireHexa, valueDesireSecondHexa, valueDesireEnhace1, valueDesireEnhace2, valueDesireEnhace3, valueDesireEnhace4, valueDesireCommon])

    const differenceTotalFrags = useMemo(() => {
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
        calcTotalFrag,
        calcDesireFrag,
        differenceTotalFrags
    };
};

export default useFragmentTracker;
