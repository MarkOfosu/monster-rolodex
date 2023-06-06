
import {useEffect, useState, ChangeEvent} from 'react'

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';

import {getData} from './utils/data.utils'
import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;

}


const App = () => {
  const [searchField, setSearchField] =useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setfilteredMonsters] = useState(monsters);


  useEffect (() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
      setMonsters(users);
    }  

    fetchUsers();

}, []);
        

  const  handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void =>  {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
    }
    
    useEffect(() => {
      const NewfilteredMonsters = monsters.filter((monster) =>{
        return  monster.name.toLocaleLowerCase().includes(searchField);
        });

        setfilteredMonsters(NewfilteredMonsters)
    },[monsters, searchField])



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
