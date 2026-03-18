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
                <div>
                    <label >Jour</label>
                    <input 
                        type="text"
                        value={day}    
                        onChange={(e) => setDay(e.target.value)}
                    />
                </div>
                <div>
                    <label >Mois</label>
                    <input 
                        type="text"
                        value={mounth}    
                        onChange={(e) => setMounth(e.target.value)}
                    />
                </div>
                <div>
                    <label >Année</label>
                    <input 
                        type="text"
                        value={year}    
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
                <button type="submit"><span>&#8595;</span></button>
            </form>

            {loading && <p>Chargement...</p>}
            {error && <p>Erreur : {error}</p>}

                
                <div>
                    <p><span>{age?.years ?? '--'}</span> années</p>
                    <p><span>{age?.months?? '--'}</span> mois</p>
                    <p><span>{age?.days??'--'}</span> jours</p>
                </div>
        </div>
    )
}