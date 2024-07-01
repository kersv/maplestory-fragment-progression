import '../App.css'
import Tracker from '../feature/Tracker'
import DesireSkill from '../feature/DesireSkill'
import useFragmentTracker from '../feature/useFragmentTracker'
const Home = () => {
    const hook = useFragmentTracker();
    return (
        <div>
            <h3>Maplestory 6th Job Tracker</h3>
            <div style={{display:'flex'}}>
                <Tracker props={hook}/>
                <DesireSkill props={hook}/>
            </div>
        </div>
    )
}

export default Home;