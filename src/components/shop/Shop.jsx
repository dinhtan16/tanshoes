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

  const handleChange = (event) => {
    setCategories(event.target.value);
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

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
  );
};

export default Shop;
