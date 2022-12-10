import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import "./shop.scss";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import ProductCard from "../product/ProductCard";
import ReactPaginate from "react-paginate";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'

const Shop = () => {
<<<<<<< HEAD
  const { products } = useContext(ProductsContext);
  console.log(products)
  const [categories, setCategories] = React.useState("");
  const [price, setPrice] = React.useState("");
  //paginate
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemPerPage = 4;
  useEffect(() => {
    const endOffset = itemOffset + itemPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemPerPage));
  }, [itemOffset, itemPerPage, products]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemPerPage) % products.length;
    setItemOffset(newOffset);
  };

=======
  const { products,setProducts } = useContext(ProductsContext);

  const [categories, setCategories] = React.useState("");
  const [price, setPrice] = React.useState("");
  //paginate
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage,setPostPerPage] = useState(2);
  const [productFilter,setProductFilter] = useState([])
>>>>>>> 0c5c0b02655be0b8f9f90f5a9317cfcee01d978f
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

<<<<<<< HEAD
  return (
    <Container>
    <Row>
        <Col lg='12'>
          <div className="my-6 px-8 flex gap-4 items-center flex-wrap" id="12">
            <div className="filter-categories">
              <Box sx={{ minWidth: 100 }}>
                <FormControl size="small" className="w-[100px] lg:w-[300px]">
                  <InputLabel id="demo-simple-select-label">
                    Filter by Categories
                  </InputLabel>
                  <Select
                    defaultValue="Men Shoes"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categories}
                    label="Filter by Categories"
                    onChange={handleChange}
                    inputProps={{ MenuProps: { disableScrollLock: true } }}
                  >
                    <MenuItem value={"Men Shoes"}>Men Shoes</MenuItem>
                    <MenuItem value={"Kids originals"}>Kids originals</MenuItem>
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
          </div>
        </Col>
  
        <Row>
            {currentItems.map((item) => {
              return (
                <>
                      
                    <ProductCard item={item} key={item.ID} />
                
                </>
              );
            })}
        </Row>
  
        <Col lg='12'>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="paginate"
            pageLinkClassName="page-link"
            previousClassName="prev"
            nextLinkClassName="next"
          />
        </Col>
    </Row>
    </Container>
=======
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
>>>>>>> 0c5c0b02655be0b8f9f90f5a9317cfcee01d978f
  );
};

export default Shop;
