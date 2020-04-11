import React,{useEffect,useState} from 'react';
import Recipes from './Recipes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App=()=> {
    const API_ID ="09985b43";
    const API_KEY = "0e2b92d3d7a48084b3584eb2ba32a256";

    

    const [recipes,setRecipes] = useState([]);
    //const [counter,setCounter] = useState(0);
    const [search,setSearch] = useState("");
    const [query,setQuery] = useState('chicken');
    //const URL = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`

    useEffect(()=>{
      getRecipes();
    },[query]);      //second parameter is the number of time  useEffect runs
    //if second parameteer is [] it only runs at mount
    //if [counter] runs everytime  if counter changes
    //if [search] runs for every word
    //if [query] runs on submit form

    const getRecipes = async () =>{
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
      const data =await response.json();     /*we don't know when the info comeback make dure to add await everytime you have promise */
      console.log(data.hits);
      console.log("Use Ehhect");
      setRecipes(data.hits);
      //also can be written as
      // fetch(URL)
      // .then(response=>{
      //   response.json
      // })
    }

    const updateSearch = e => {        //use inline onchange
      /*collect event*/
      console.log("before",e.target.value)
      //setSearch("");
      setSearch(e.target.value); // sets a callback function
      console.log("After",e.target.value);
      console.log(e.target)
    }

    const getSearch = async e =>{     /*run on submit form*/
        e.preventDefault();
        await setQuery(search);
//        getRecipes();
        console.log(">>getSearch",search);
        setSearch('');
    }

   

    return (
      <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
          {search}
          <button
           className="search-button" 
           type="submit"
           >
            Search 
          </button>
        </form>
        <div className="recipes">
        {/* <h1  onClick={()=> setCounter(counter+1)} >{counter}</h1> */}
        {
          recipes.map(recipe =>(
              <Recipes 
               key = {recipe.recipe.label}
               title={recipe.recipe.label}
               calories={recipe.recipe.calories}
               image={recipe.recipe.image}
               ingredients={recipe.recipe.ingredients}
              />
          ))            //to return html or jsx we use () instead of {} in arr.map
        }
        </div>
      </div>
    );
};

export default App;
