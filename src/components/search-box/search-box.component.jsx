
import './search-box.styles.css'
const SearchBox  = () => {
    return(
        <input 
        className={`search-box ${this.props.className}`}
        type={this.props.type}
         placeholder={this.props.placeholder}
         onChange={this.props.onChangeHandler}
        />
    );
}
   

export default SearchBox;