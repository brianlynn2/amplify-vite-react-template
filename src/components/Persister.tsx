
import  {Schema} from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Component, createElement, useState, useEffect } from 'react';

const client = generateClient<Schema>();

export function persistTrackingInfo(location, cumTime) {
    var msg = "persister";
    if (location && cumTime) {
        msg = "persist tracking info: "+location +" for "+ cumTime;
      //  alert(msg);
        updateTracking(location, cumTime);
    }
    return (<p>{msg}</p>);
}


  function createTracking(location, cumTime) {
    client.models.Tracking.create({ id: location, location:location, cumTime : cumTime });
  }

    function updateTracking(location, cumTime) {

    var track;
    client.models.Tracking.get({ id: location, }).then(
        (retval) => { saveTracking(retval.data, cumTime)},
        createTracking(location, cumTime));

/*

    //promise.then({(ret) => {track = ret}});

      if (!track) return createTracking(location, cumTime);
      const priorTime = track.cumTime;

    const newTracking = { id: location, location: location, cumTime : priorTime + cumTime};
    client.models.Tracking.update(newTracking);
    */
    }

function saveTracking(track, cumTime) {
    const priorTime = track.cumTime;
    const location = track.location;
    const newTracking = { id: location, location: location, cumTime : priorTime + cumTime};
    client.models.Tracking.update(newTracking);
}

  function deleteTracking(id) {
    client.models.Tracking.delete({ id })
  }


      export function isPersisted (key) {
      /*
        return trackings.reduce(
            (accumulator, curval) =>  accumulator ? accumulator :
                curval.id === key ? curval : null);
                */
      }

export function Persister () {

    const [trackings, setTrackings] = useState<Array<Schema["Tracking"]["type"]>>([]);
      useEffect(() => {
        client.models.Tracking.observeQuery().subscribe({
          next: (data) => setTrackings([...data.items]),
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



