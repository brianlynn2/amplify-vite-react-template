
import  {Schema} from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import {   useState, useEffect } from 'react';

const client = generateClient<Schema>();

export function persistTrackingInfo(location, cumTime, top, lowest) {
    var msg = "persister";

    if (location && cumTime) {
        msg = "persist tracking info: "+location +" for "+ cumTime;
      //  alert(msg);
        updateTracking(location, cumTime, top, lowest);
    }

    return (<p>{msg}</p>);
}

    function updateTracking(location, cumTime, top, lowest) {
        const saveT=  (ret) => {  return ret?saveTracking(ret.data, cumTime, top, lowest) : null };
        const createT= () => { createTracking(location, cumTime, top, lowest); return null; };


    client.models.Tracking.get({ id: location }).then(
        (ret) => saveT(ret),  createT() );
    }

function saveTracking(track, cumTime, top, bot ) {
    const priorTime = track.cumTime;
    const priorTop= track.seenTop;
    const priorBot = track.lowest;
    const location = track.location;
//    const foo= 1;
    const
       newTop= (top < priorTop) ? top:priorTop;

    const
        newLowest= priorBot> bot? priorBot:bot;

//    const newTracking = { id: location, location: location, cumTime : priorTime + cumTime, top: Math.min(top, priorTop), lowest: Math.max(lowest, priorlowest)};
    const
        newTracking= { id:location, location: location, seenTop : newTop, seenBottom : newLowest,  cumTime : priorTime + cumTime};
    client.models.Tracking.update(newTracking);
    return newTracking;
}

function createTracking(location, cumTime, top, lowest) {
    var t= { id: location, location:location, cumTime : cumTime, seenTop: top, seenBottom: lowest }
    client.models.Tracking.create(t);
    return null;
    }


    function deleteTracking(id) {
    client.models.Tracking.delete({ id })
  }

export  function deleteAllTrackings(data) {
        if(!data) return;
        data.map((record) => deleteTracking(record.id));
    }



export function Persister (props) {

    const [trackings, setTrackings] = useState<Array<Schema["Tracking"]["type"]>>([]);
    var setter = props.setTracking;
    if(!setter) setter= setTrackings;

      useEffect(() => {
        client.models.Tracking.observeQuery().subscribe({
          next: (data) => setter([...data.items]),
        });
      }, []);



  //  return (<p>tracking info</p>);

        return(
                      <ul>
                                 {trackings.map((tracking) => (
                                   <li
                                   onClick={() => deleteTracking(tracking.id)}
                                   key={tracking.id}>ID: {tracking.id}, loc={tracking.location},created at {tracking.createdAt}, updated at {tracking.updateAt}, cum time {tracking.cumTime}</li>
                                 ))}
                               </ul>
        );

  }



