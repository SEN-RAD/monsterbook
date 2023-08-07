You can implement a method to iterate over a Javascript object, but most often you want something different.
Example json response:
{
  "meals": [
    {
      "strMeal": "Baked salmon with fennel & tomatoes",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/1548772327.jpg",
      "idMeal": "52959"
    },
    {
      "strMeal": "Cajun spiced fish tacos",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
      "idMeal": "52819"
    },
}

So it's a nested structure.
You just select the meals which is an array and then use Array.map over it.
https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
TypeError🍃 — Today at 10:05 AM
Here, you can put this into your Javascript console:


const mealsArray = []

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then(res => res.json())
    .then(json => json.meals.forEach(m => mealsArr.push(m))) // (A)
    .catch(ex => console.error(ex))

console.table(mealsArr)

In (A) we already select the meals property of the response. This is an array, so you can use Array.map or Array.forEach or whatever array methods you need.



















class App extends Component {
  state = {
      data: [],
    }

    componentDidMount(){


     

      
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data=> this.setState({ data: data }));
    }


    render(){
      const {data} = this.state;
      return (
          <div>
            <ul>
              {data.map ((user)=> {
                return (
                 <li key={user.id}>{user.name}</li>
                )}
              )
            }

              </ul>
          </div>
      );
    }  
  }
 
export default App;