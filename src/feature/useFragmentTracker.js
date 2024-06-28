import { useMemo, useState } from "react";
import { ORIGIN_FRAGMENT_COST, HEXA_MASTERY_FRAGMENT_COST, ENHANCEMENT_FRAGMENT_COST, COMMON_CORE_COST } from "../constants/fragmentCost";

const useFragmentTracker = () => {
    const [valueOri, setOri] = useState(0);
    const [valueHexa, setHexa] = useState(0);
    const [valueSecondHexa, setSecondHexa] = useState(0);
    const [valueEnhace1, setEnhace1] = useState(0);
    const [valueEnhace2, setEnhace2] = useState(0);
    const [valueEnhace3, setEnhace3] = useState(0);
    const [valueEnhace4, setEnhace4] = useState(0);
    const [valueCommon, setCommon] = useState(0);

    const handleChange = (e, setter) => {
        const newValue = e.target.value;
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
        return calcFragCost('Origin', valueOri) +
            calcFragCost('HEXA', valueHexa) +
            calcFragCost('HEXA', valueSecondHexa) +
            calcFragCost('Enhancement', valueEnhace1) +
            calcFragCost('Enhancement', valueEnhace2) +
            calcFragCost('Enhancement', valueEnhace3) +
            calcFragCost('Enhancement', valueEnhace4) +
            calcFragCost('Common', valueCommon);
    }, [valueOri, valueHexa, valueSecondHexa, valueEnhace1, valueEnhace2, valueEnhace3, valueEnhace4, valueCommon]);

    return {
        values: {
            valueOri, valueHexa, valueSecondHexa, valueEnhace1, valueEnhace2, valueEnhace3, valueEnhace4, valueCommon
        },
        setters: {
            setOri, setHexa, setSecondHexa, setEnhace1, setEnhace2, setEnhace3, setEnhace4, setCommon
        },
        handleChange,
        calcFragCost,
        calcTotalFrag
    };
};

export default useFragmentTracker;
