import { useState } from "react";
import useAge from "../hook/useAge";


export default function Age(){
    const [year, setYear] = useState("")
    const [mounth, setMounth] = useState("")
    const [day, setDay] = useState("")
    const [searchAge, setSearchAge] = useState({})
    const { age, loading, error } = useAge(searchAge)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchAge({year, mounth, day})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={year}    
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="Entrez une Année" 
                />
                <input 
                    type="text"
                    value={mounth}    
                    onChange={(e) => setMounth(e.target.value)}
                    placeholder="Entrez un Mois" 
                />
                <input 
                    type="text"
                    value={day}    
                    onChange={(e) => setDay(e.target.value)}
                    placeholder="Entrez un Jour" 
                />
                <button type="submit">Rechercher</button>
            </form>

            {loading && <p>Chargement...</p>}
            {error && <p>Erreur : {error}</p>}

                
                <div>
                    <p>Année : {age?.years ?? '--'}</p>
                    <p>Mois : {age?.months?? '--'}</p>
                    <p>Jour : {age?.days??'--'}</p>
                </div>
        </div>
    )
}