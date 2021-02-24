import React from 'react';
import { context } from '../../App';
import ReactGantt from 'gantt-for-react';
// import dummydata from '../../data/dummydata.json';
import { getSpreadsheet } from '../../data/GoogleSheetAPI';

const Dashboard = () => {

    const [data, setData ] = React.useState([]);
    const Context = React.useContext(context);
    console.log(Context.timelineData.timelineData);

    React.useEffect(()=> {
        getSpreadsheet().then(res => {
            const temp = [];
            for(let i=0;i<res.length;i++){
                const arr = res[i]._rawData;
                temp.push({
                    id : arr[0],
                    name : arr[1],
                    start : arr[2],
                    end : arr[3],
                    progress : arr[4]
                });
            }
            setData(temp);
        })
        .catch((err) => {
            console.log(err);
        })
    },[]);

    console.log(data);

    // const tasks = Context.timelineData.timelineData;
    // const tasks = dummydata;
    // console.log(tasks);

    return (
        <div>
            {data.length>0 ? <ReactGantt
                tasks={data}
                viewMode="Day"
            /> : <h1>Timeline is empty! Please create some timelines.</h1>}
            {/* <ReactGantt tasks={tasks} viewMode="Day" /> */}
        </div>
    )
}

export default Dashboard
