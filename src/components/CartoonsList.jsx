import {React,useState} from 'react';
import '../styles.css'
import CartoonInfo from './CartoonInfo';

const cartoons =
  [
    {
      cartoonName: 'avatar the l ast airbender ', discreption: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore 
 et dolore magna aliqua` },
    {
      cartoonName: 'generator rex ', discreption: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore 
 et dolore magna aliqua` },
    {
      cartoonName: 'ben 10 ', discreption: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore 
 et dolore magna aliqua` }, {
      cartoonName: 'x men ', discreption: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore 
 et dolore magna aliqua` }, {
      cartoonName: 'disenchantment ', discreption: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore 
 et dolore magna aliqua` }, {
      cartoonName: 'rick and morty ', discreption: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore 
 et dolore magna aliqua` },
    {
      cartoonName: 'miraculous lady bug', discreption: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore 
 et dolore magna aliqua` },
    {
      cartoonName: 'regular show ', discreption: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore 
 et dolore magna aliqua` },

  ];
  function CartoonsList() {
    const [searchInput, setSearchInput] = useState(""); 
  
    const handleSearchChange = (e) => {
      setSearchInput(e.target.value);
    };
  
    const filteredCartoons = searchInput.length > 0
      ? cartoons.filter((cartoon) =>
          cartoon.cartoonName.toLowerCase().includes(searchInput.toLowerCase())
        )
      : cartoons;
  
    return (
      <div className="cartoonsList">
        <h1>My top 10 Cartoons of all time</h1>
        <div>
          <input className='search'
            type="text"
            placeholder="Search here"
            onChange={handleSearchChange}
            value={searchInput}
          />
          <div className="restaurant-list">
            {filteredCartoons.map((cartoon) => (
              <CartoonInfo
                key={cartoon.cartoonName}
                cartoonName={cartoon.cartoonName}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default CartoonsList;