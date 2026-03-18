function affichage(date2){
    const DAY_TIME = 3600 * 24 * 1000;
    const today = new Date();
    // reset sur date du jour
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    
    // date de référence
    // exemple attention mois indexé de 0 à 11 -- ci-dessous  10 Décembre 1980
    let dateRef = date2;
    // affichage
    console.log("today :", today.toString());
    console.log("dateRef :", dateRef.toString());
    // objet résultat
    const ecart = {
    years: 0,
    months: 0,
    days: 0,
    inDays: 0
    };
    
    // calcul en jours pleins
    ecart.inDays = ((today.getTime() - dateRef.getTime()) / DAY_TIME) >> 0;
    
    // nombre d'années complétes
    // on se place sur l'année suivante
    dateRef.setFullYear(dateRef.getFullYear() + 1);
    while (dateRef < today) {
    ecart.years += 1;
    dateRef.setFullYear(dateRef.getFullYear() + 1);
    }
    // réajuste la date en sortie de boucle
    dateRef.setFullYear(dateRef.getFullYear() - 1);
    
    // nombre de mois complets
    // on se place sur le mois suivant
    dateRef.setMonth(dateRef.getMonth() + 1);
    while (dateRef < today) {
    ecart.months += 1;
    dateRef.setMonth(dateRef.getMonth() + 1);
    }
    // réajuste la date en sortie de boucle
    dateRef.setMonth(dateRef.getMonth() - 1);
    
    // nombre de jours complets
    // on se place sur le jour suivant
    dateRef.setDate(dateRef.getDate() + 1);
    while (dateRef < today) {
    ecart.days += 1;
    dateRef.setDate(dateRef.getDate() + 1);
    }
    
    return ecart
}

export function calculDate(day, mounth, year){
            let date=new Date()
            console.log(date, day, mounth,year)
            if(mounth in ["02","04","06","09","11"]){
                console.log("kiwi")
                if(parseInt(day)>=31)
                    return}
            if(parseInt(day)>31){
                console.log("Pomme")
                return}

            let date2 = new Date(parseInt(year), parseInt(mounth),parseInt(day))
            const dateTotale=affichage(date2)
            console.log(dateTotale)
}

