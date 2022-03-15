import {reinforceParam} from "../json/ReinforceParamWeapon";
import {equipParam} from "../json/EquipParamWeapon";

export const getCorrectStr = (equipId) => {
    let reinforceTypeID = equipParam[equipId].reinforceTypeId
    if (equipParam[equipId].materialSetId === 2200) reinforceTypeID+=10
    else reinforceTypeID+=25
    return equipParam[equipId].correctStrength * reinforceParam[reinforceTypeID].correctStrengthRate
}