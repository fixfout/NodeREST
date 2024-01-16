function digitalClock(time){
    let hour = Math.floor(time / (60*60));
    let mins = Math.floor((time % 3600)/60);
    let secs = Math.floor((time % 3600)%60);
    if (hour >= 24){}
};
digitalClock(5025);
digitalClock(61201);
digitalClock(87000);