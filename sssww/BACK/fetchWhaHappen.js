import WhaHappen from "./src/modules/whaHappenSchema.js"
let Zurnalas;
let time;

export default async function whaHappen(action, user){
    Zurnalas = new WhaHappen({
        time,
        user,
        action
     })
     Zurnalas.save()
     console.log(Zurnalas)
};