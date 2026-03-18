import { calculDate } from "../services/ageService";

export default function AgeGlobal(day, mounth, year){

    const date = 
    console.log("test",calculDate(1,1,1))

    return (
        <>
        <form>
            <input type="text" name="annee" placeholder="Année"/>
            <input type="text" name="mois" placeholder="Mois" />
            <input type="text" name="jour" placeholder="Jour" />
            <button>Oui</button>
        </form>
        </>
    )
}