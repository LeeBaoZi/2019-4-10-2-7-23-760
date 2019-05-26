module.exports = function main(distance,parkTime) {
    // write your code here...
    if(distance<=8&&distance>=2){
        return Math.round(6+(distance-2)*0.8+parkTime*0.25);
    }
    else if(distance>8){
        return Math.round(6+(distance-2)*0.8+parkTime*0.25+(distance-8)*0.8*0.5);
    }
    else return Math.round(6+parkTime*0.25);
};
