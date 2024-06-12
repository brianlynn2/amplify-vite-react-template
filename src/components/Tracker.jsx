


var trackerName = "";


export   function   track (topPos, bottomPos, ht) {
        var topPct = topPos /ht;
        var botPct = bottomPos / ht;
        var ts = Date.now();
        alert("tracker got top%="+topPct+", bot%="+botPct+", trackerName="+trackerName);
    }

export  function initTracker (name) {
    let trackerName = name;
    alert("init tracker to "+name);
}




