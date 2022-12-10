import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import ProductCard from "../product/ProductCard";
import { useState } from "react";
import Paginate from "../single-dom/paginate/Paginate";

const Shop = () => {
  const { products,setProducts } = useContext(ProductsContext);

  const [categories, setCategories] = React.useState("");
  const [price, setPrice] = React.useState("");
  //paginate
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage,setPostPerPage] = useState(2);
  const [productFilter,setProductFilter] = useState([])
  const handleChange = (event) => {
    setCategories(event.target.value);
    const filterItemSelected = event.target.value
    if(filterItemSelected === "Men Shoes"){
      const filterItemProduct = products.filter(item => item.Categories === "Men Shoes")
      setProductFilter(filterItemProduct)  
    }
    if(filterItemSelected === "Slides"){
      const filterItemProduct = products.filter(item => item.Categories === "Slides")
      setProductFilter(filterItemProduct)  
    }
    if(filterItemSelected === "Kid originals"){
      const filterItemProduct = products.filter(item => item.Categories === "Kid originals")
      setProductFilter(filterItemProduct)  
    }
    if(filterItemSelected === "All"){
      const filterItemProduct = products
      setProductFilter(filterItemProduct)  
    }
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
    
  };
  const handleSearch = (event) => {
    const userType = event.target.value;

    if (userType.length > 0) {
      const filterSearch = products.filter((item) => {
        return item.ProductName.toLowerCase().includes(userType.toLowerCase());
      });

      setProductFilter(filterSearch);
    }
  }

  //paginate
  const lastPostIndex = postPerPage * currentPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const filterProductsPaginate = productFilter.slice(firstPostIndex, lastPostIndex);
  // setProducts(currentPost)

  return (
    <>
      <div className="my-6 px-8 flex gap-4 items-center flex-wrap">
        <div className="filter-categories">
          <Box sx={{ minWidth: 100 }}>
            <FormControl size="small" className="w-[100px] lg:w-[300px]">
              <InputLabel id="demo-simple-select-label">
                Filter by Categories
              </InputLabel>
              <Select
              
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={categories}
                label="Filter by Categories"
                onChange={handleChange}
                inputProps={{ MenuProps: { disableScrollLock: true } }}
              >
                <MenuItem value={'All'}>All</MenuItem>

                <MenuItem value={"Men Shoes"}>Men Shoes</MenuItem>
                <MenuItem value={"Kid originals"}>Kid originals</MenuItem>
                <MenuItem value={"Slides"}>Slides</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="filter-categories">
          <Box sx={{ minWidth: 300 }}>
            <FormControl size="small" className="w-[100px] lg:w-[300px]">
              <InputLabel id="demo-simple-select-label">
                Filter by Price
              </InputLabel>
              <Select
                defaultValue="Men Shoes"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={price}
                label="Filter by Price"
                onChange={handleChangePrice}
                inputProps={{ MenuProps: { disableScrollLock: true } }}
              >
                <MenuItem value={"Ascending"}>Ascending</MenuItem>
                <MenuItem value={"Descending"}>Descending</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <TextField
          id="outlined-basic"
          size="small"
          label="Type to search"
          variant="outlined"
          inputProps={{ MenuProps: { disableScrollLock: true } }}
          onChange={handleSearch}
        />
      </div>
   <>
        <div className="product-grid grid lg:grid-cols-4 lg:gap-2 md:grid-cols-2 grid-cols-1 h-full w-full px-6">
          {productFilter &&  filterProductsPaginate.map((item) => {
            return (
              
                <ProductCard item={item} key={item.ID} />
              
            );
          })}
        </div>
   </>
      <Paginate
        totalPost={products.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Shop;
