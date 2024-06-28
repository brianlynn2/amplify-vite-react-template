
import  {Schema} from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Component, createElement, useState, useEffect } from 'react';

const client = generateClient<Schema>();

export function persistTrackingInfo(location, cumTime, top, bottom) {
    var msg = "persister";
    if (location && cumTime) {
        msg = "persist tracking info: "+location +" for "+ cumTime;
      //  alert(msg);
        updateTracking(location, cumTime, top, bottom);
    }
    return (<p>{msg}</p>);
}

    function updateTracking(location, cumTime, top, bottom) {

    var track;
    client.models.Tracking.get({ id: location, }).then(
        (retval) => { saveTracking(retval.data, cumTime, top, bottom)},
        createTracking(location, cumTime,top, bottom));
    }

function saveTracking(track, cumTime, top, bottom) {
    const priorTime = track.cumTime;
    const priorTop= track.top;
    const priorBottom = track.bottom;
    const location = track.location;
    const newTracking = { id: location, location: location, cumTime : priorTime + cumTime, top: Math.min(top, priorTop), bottom: Math.max(bottom, priorBottom)};
    client.models.Tracking.update(newTracking);
}

function createTracking(location, cumTime, top, bottom) {
    client.models.Tracking.create({ id: location, location:location, cumTime : cumTime, top:top, bottom:bottom });
    }


    function deleteTracking(id) {
    client.models.Tracking.delete({ id })
  }

export  function deleteAllTrackings(data) {
        if(!data) return;
        data.map((record) => deleteTracking(record.id));
    }


      export function isPersisted (key) {
      /*
        return trackings.reduce(
            (accumulator, curval) =>  accumulator ? accumulator :
                curval.id === key ? curval : null);
                */
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



