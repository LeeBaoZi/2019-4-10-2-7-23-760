module.exports = function main(inputs) {
    // write your code here...
    if(inputs.distance<=8&&inputs.distance>=2){
        return Math.round(6+(inputs.distance-2)*0.8+inputs.parkTime*0.25);
    }
    else if(inputs.distance>8){
        return Math.round(6+(inputs.distance-2)*0.8+inputs.parkTime*0.25+(inputs.distance-8)*0.8*0.5);
    }
    else return Math.round(6+inputs.parkTime*0.25);
};
