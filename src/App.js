// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react' 
import Products from './components/Products/Products'
import SearchBar from './components/SearchBar/SearchBar';
import Drawer from './components/Drawer/Drawer'


function App() {

  //stores json data from api
  const [data, setData] = useState([]);
  //stores the value of the input field
  const [input, setInput] = useState("")
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const [priceValue, setPriceValue] = useState([0, 1000]);
  const [sortValue, setSortValue] = useState("")
  const [category, setCategory] = useState("")
  
  const apiUrl = 'https://fakestoreapi.com/products'
  
  //used a utility function in useEffect hook to fetch json from api and store in state, updates anytime the apiUrl is changed

  useEffect(() => {
    const getData = () => {
      fetch(apiUrl)
        .then((res) => {
          if (res.status >= 400) {
            throw new Error("Can't fetch api data");
          }
          return res.json();
        })
        .then(
          (result) => {
            setData(result)
            
            setLoading(false);
            console.log(result);
          },
          (err) => {
            setError(err);
            setLoading(false);
            alert(err.message);
            console.log(err.message);
          }
        );
    };
    getData();
  }, [apiUrl]);

  //sets the input state to the value of the input on the screen
  const inputHandler = (event) => {
    setInput(event.target.value);
    // console.log(input);
  };

  // takes the 2 values on the slider and sets them to the value state
  const handlePriceChange = (event, newPriceValue) => {
    setPriceValue(newPriceValue);
    
    // console.log(data[0].price)
    
  };

  const handleCategory = (event) => {
    setCategory(event.target.value)
    // console.log(event.target.value)
    // console.log(category);

  }

  // sets the sortValue state to the value chosen from the dropdown menu
  const handleSort = event => {
    setSortValue(event.target.value)
    console.log(event.target.value)
  }

  const resetFilters = (priceValue, category, sortValue) => {
    setPriceValue([0,1000])
    setCategory("")
    setSortValue("")
  }
  
  

  return (
    <div>
      <SearchBar  handleChange={inputHandler} input={input}/>
      <Drawer resetFilters={resetFilters} handlePriceChange={handlePriceChange} priceValue={priceValue} category={category} handleCategory={handleCategory} sortValue={sortValue}  handleSort={handleSort} />
      <Products sortValue={sortValue} priceValue={priceValue} data={data} input={input} handleSlider={handlePriceChange} category={category} />
    </div>
  );
}

export default App;
