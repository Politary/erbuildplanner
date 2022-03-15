import logo from './logo.svg';
import './App.css';
import { reinforceParam } from './json/ReinforceParamWeapon';
import { equipParam } from './json/EquipParamWeapon';
import { getCorrectStr } from './utils/getCorrectStr';
import { Column, Planner, StatInput, StatRow } from './pages/App/App.styles';
import { useEffect, useState } from 'react';

function App() {
    const id = 2020100;
    const correctStr = getCorrectStr(id);
    const baseAtk = equipParam[id].atkBasePhysics;
    let reinforceTypeID = equipParam[id].reinforceTypeId;
    if (equipParam[id].materialSetId === 2200) reinforceTypeID += 10;
    else reinforceTypeID += 25;
    const atkPhysic = baseAtk * reinforceParam[reinforceTypeID].physicsAtkRate;
    // console.log(baseAtk);
    // console.log(correctStr);
    // console.log(atkPhysic);

    const [stats, setStats] = useState([15, 10, 11, 14, 13, 9, 9, 7]);
    const statNames = [
        'Vigor',
        'Mind',
        'Endurance',
        'Strength',
        'Dexterity',
        'Intelligence',
        'Faith',
        'Arcane',
    ];

    const setStat = (target) => {
        if (target.value.length > 2) {
            target.value = target.value.slice(0, 2);
        }
        const updatedStats = stats.map((stat, index) => {
            return index === Number(target.id) ? Number(target.value) : stat;
        });
        setStats(updatedStats);
    };

    let currentLevel = stats.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        -79
    );
    useEffect(() => {
        const initialValue = -79;
        currentLevel = stats.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initialValue
        );
    }, [setStats]);

    console.log(stats);

    return (
        <div className="App">
            <Planner>
                <Column>
                    <StatRow>
                        <span>Level</span>
                        <span>{currentLevel}</span>
                    </StatRow>
                    {stats.map((stat, index) => {
                        return (
                            <StatRow key={index}>
                                <label htmlFor={statNames[index]}>
                                    {statNames[index]}
                                </label>
                                <StatInput
                                    type="number"
                                    max="99"
                                    maxlength="2"
                                    name={statNames[index]}
                                    id={index}
                                    defaultValue={stat}
                                    onChange={(e) => setStat(e.target)}
                                />
                            </StatRow>
                        );
                    })}
                </Column>
                <Column>2</Column>
                <Column>3</Column>
            </Planner>
        </div>
    );
}

export default App;
