import { useEffect, useState } from "react";
import { calculDate } from "../services/ageService";

export default function useAge(date){
    const [age, setAge] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        if(!date) return
        function loadAge(){
            setLoading(true)
            setError(null)
            try{
                const data=  calculDate(date.year,date.mounth,date.day)
                setAge(data)
            }catch(err){
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }
        loadAge()

    },[date])
    return {age, loading, error} 
}