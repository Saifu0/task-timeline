import React from 'react';
import { context } from '../../App';
import ReactGantt from 'gantt-for-react';

const Dashboard = () => {

    const Context = React.useContext(context);
    console.log(Context.timelineData.timelineData);

    const tasks = Context.timelineData.timelineData;

    return (
        <div>
            {Context.timelineData.timelineData.length>0 ? <ReactGantt
                tasks={tasks}
                viewMode="Day"
            /> : <h1>Timeline is empty! Please create some timelines.</h1>}
        </div>
    )
}

export default Dashboard
