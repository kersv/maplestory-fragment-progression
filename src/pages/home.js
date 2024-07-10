import React, { useState, useEffect } from 'react';
import '../App.css';
import Tracker from '../feature/Tracker';
import DesireSkill from '../feature/DesireSkill';
import useFragmentTracker from '../feature/useFragmentTracker';
import loader from '../assets/loader.gif';

const Home = () => {
    const hook = useFragmentTracker();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                    <img src={loader} alt="Loading..."/>
                </div>
            ) : (
                <div>
                    <h3>MapleFrags</h3>
                    <div style={{ display: 'flex' }}>
                        <Tracker props={hook} />
                        <DesireSkill props={hook} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
