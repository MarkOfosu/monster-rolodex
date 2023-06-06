
import {useEffect, useState} from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = () => {
  const [searchField, setSearchField] =useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setfilteredMonsters] = useState(monsters);

  const  handleSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
    }
    
    useEffect(() => {
      const NewfilteredMonsters = monsters.filter((monster) =>{
        return  monster.name.toLocaleLowerCase().includes(searchField);
        });

        setfilteredMonsters(NewfilteredMonsters)
    },[monsters, searchField])

   
    

  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => setMonsters(users));
  }, []);
        

return(
  <div className="App">
    <h1 className='app-title'>Monsters Rolodex</h1>
  <SearchBox  
  type='search'
  placeholder='search monsters'
  onChangeHandler ={handleSearchChange}
  />
  <CardList  monsters={filteredMonsters}/>

  </div>
)
}

export default App;
