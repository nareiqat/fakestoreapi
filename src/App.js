import {useState, useEffect} from 'react' 
import Products from './components/Products/Products'
import SearchBar from './components/SearchBar/SearchBar';
import Drawer from './components/Drawer/Drawer';
import LoadingComponent from './components/LoadingComponent'



function App() {

  //stores json data from api
  const [data, setData] = useState([]);
  //stores the value of the input field
  const [input, setInput] = useState("")
  //stores error value
  const [error, setError] = useState('');
  //stores loading boolean
  const [loading, setLoading] = useState(true);
  //state array showing min and max price value
  const [priceValue, setPriceValue] = useState([0, 1000]);
  //state for sort option
  const [sortValue, setSortValue] = useState("")
  //state for category option
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
            setLoading(true);
            alert(err.message);
            console.log(err.message);
          }
        );
    };
    getData();
  }, []);

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

  //resets filters to there inital state and the Ui is rerendered
  const resetFilters = () => {
    setPriceValue([0,1000])
    setCategory("")
    setSortValue("")
    // window.location.reload()
  }

  //sorts the price in ascending or descending depending on sort value chose
  //if diff is 0 nothing changes
  //if a.price is greater diff is positive and sign returns 1, thus the products are sorted in ascending order
  //if b.price is greater
  const sortPrice = (sortValue, data) => {
    if(sortValue === 'lowtohigh' || sortValue === 'hightolow'){
      data.sort((a,b) => {
        const diff = a.price - b.price;
        if(diff === 0){
          return 0
        }
        const sign = Math.abs(diff)/diff
        return sortValue === 'lowtohigh' ? sign:-sign
      })
    } else {
      data.sort((a,b) => {
        const diff = a.id - b.id;
        if(diff === 0){
          return 0
        }
        const sign = Math.abs(diff)/diff
        return sortValue === '' ? sign:0
      })
    }
  }


  return ( 
    loading ? <LoadingComponent /> : 
    <div>
      <SearchBar  handleChange={inputHandler} input={input}/>
      <Drawer resetFilters={resetFilters} handlePriceChange={handlePriceChange} priceValue={priceValue} category={category} handleCategory={handleCategory} sortValue={sortValue}  handleSort={handleSort} />
      <Products  sortPrice={sortPrice} sortValue={sortValue} priceValue={priceValue} data={data} input={input} handleSlider={handlePriceChange} category={category} />
    </div> 
    
  )
  
}

export default App;
