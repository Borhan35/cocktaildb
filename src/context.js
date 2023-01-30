import axios from "axios";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = createContext({});

const AppProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [cocktails, setCocktails] = useState([]);
    const [searchTerm, setSearchTerm] = useState('a');

    const fetchDrink = useCallback( async () => {
        setLoading(true)
        try{
            const {data} = await axios(`${url}${searchTerm}`, {
                headers:{
                    Accept: 'application/json'
                }
            });
            const {drinks} = data;
            if(drinks){
                const newCocktails = drinks.map(item => {
                    const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item;
                    return{
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass
                    }
                })
                setCocktails(newCocktails);
            }else{
                setCocktails([]);
            }
            setLoading(false)
        }catch(error){
            console.log(error.response)
        }
    }, [searchTerm])

    useEffect(() => {
        fetchDrink();
    }, [fetchDrink, searchTerm])

    return <AppContext.Provider value={{loading, cocktails, setSearchTerm}}>{children}</AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, AppContext};