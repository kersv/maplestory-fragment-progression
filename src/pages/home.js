import React, { useState, useEffect } from 'react';
import '../App.css';
import Tracker from '../feature/Tracker';
import DesireSkill from '../feature/DesireSkill';
import useFragmentTracker from '../feature/useFragmentTracker';
import loader from '../assets/loader.gif';
import Modal from '../components/Modal';
import SkillChart from '../assets/skills-cost.png'
import CommonChart from '../assets/common-core-cost.png'
import {FaFileImage} from 'react-icons/fa6'
import { Button } from '../feature/styles/feature';

const Home = () => {
    const hook = useFragmentTracker();
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    return (
        <div>
            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                    <img src={loader} alt="Loading..." style={{width:'100px'}}/>
                </div>
            ) : (
                <div>
                    <div style={{display:'flex', justifyContent: 'space-between'}}>
                        <h3>MapleFrags</h3>
                        <Button onClick={toggleModal}><FaFileImage/></Button>
                    </div>
                    <Modal show={showModal} onClose={toggleModal}>
                        <img src={SkillChart}/>
                        <img src={CommonChart}/>
                    </Modal>
                    <div style={{ display: 'flex', justifyContent:'center', alignContent:'center' }}>
                        <Tracker props={hook} />
                        <DesireSkill props={hook} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
