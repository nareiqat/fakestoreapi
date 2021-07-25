// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react' 
import Products from './components/Products/Products'
import SearchBar from './components/SearchBar/SearchBar';
import Drawer from './components/Drawer/Drawer'

// import Filter from './components/Drawer/Filter/FilterByPrice'
// import Sort from './components/Drawer/Sort/Sort'
// import FilterByCategory from './components/Drawer/Filter/FilterByCatergory';
// import FilterByPrice from './components/Drawer/Filter/FilterByPrice';

function App() {

  const [data, setData] = useState([]);
  const [input, setInput] = useState("")
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const [value, setValue] = useState([0, 1000]);
  const [sortValue, setSortValue] = useState("")
  const [category, setCategory] = useState("")
  
  const apiUrl = 'https://fakestoreapi.com/products'
  


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

  const inputHandler = (event) => {
    setInput(event.target.value);
    // console.log(input);
  };

  const submitHandler = (event) => {
    // console.log(input)
    event.preventDefault()
    
  };

  const handlePriceChange = (event, newValue) => {
    setValue(newValue);
    
    // console.log(data[0].price)
    
  };

  const handleCategory = (event) => {
    setCategory(event.target.value)
    // console.log(event.target.value)
    // console.log(category);

  }

  const handleSort = event => {
    setSortValue(event.target.value)
    console.log(event.target.value)
  }

  
  

  return (
    <div>
      <SearchBar  handleChange={inputHandler} handleSubmit={submitHandler} input={input}/>
      <Drawer handlePriceChange={handlePriceChange} value={value} category={category} handleCategory={handleCategory} sortValue={sortValue}  handleSort={handleSort} />
      <Products sortValue={sortValue} value={value} data={data} input={input} handleSlider={handlePriceChange} category={category} />
    </div>
  );
}

export default App;
