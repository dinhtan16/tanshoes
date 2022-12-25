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
import Col from "react-bootstrap/Col";

import Loading from "../loading/Loading";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  const [categories, setCategories] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  //paginate
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemPerPage = 4;

  let dataRender;
  if (categories.length > 0) {
    dataRender = categories;
  } else {
    dataRender = products;
  }
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const endOffset = itemOffset + itemPerPage;
    setCurrentItems(dataRender.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(dataRender.length / itemPerPage));
  }, [itemOffset, itemPerPage, dataRender]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemPerPage) % dataRender.length;
    setItemOffset(newOffset);
    window.scrollTo(0, 0);
  };
  const handleChange = (e) => {
    setCategories(e.target.value);
    const categorySelected = e.target.value;
    setValue(categorySelected);
    if (categorySelected === "All") {
      setCategories(products);
    } else {
      const filterData = products.filter(
        (product) =>
          product.categories.toLowerCase() === categorySelected.toLowerCase()
      );
      setCategories(filterData);
    }
    setItemOffset(0);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };


  useEffect(() => {
    setLoading(true);
    let loadingTime = setTimeout(() => {
      setLoading(false);
    }, 900);
    return () => {
      clearTimeout(loadingTime)
    }
  }, []);
  return loading ? (
   <div> <Loading /></div>
  ) : (
    <Container>
      <Row>
        <Col lg="12" xs="12" md="12">
          <div className="my-6 px-8 flex gap-4 items-center flex-wrap" id="12">
            <div className="filter-categories" lg="6">
              <Box sx={{ minWidth: 100 }}>
                <FormControl
                  size="small"
                  className="w-[200px] lg:w-[300px]"
                  lg="6"
                >
                  <InputLabel id="demo-simple-select-label">
                    Filter by Categories
                  </InputLabel>
                  <Select
                    defaultValue="Men Shoes"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Filter by Categories"
                    onChange={(e) => handleChange(e)}
                    inputProps={{ MenuProps: { disableScrollLock: true } }}
                  >
                    <MenuItem value={"All"}>All</MenuItem>
                    <MenuItem value={"MenShoes"}>Men Shoes</MenuItem>
                    <MenuItem value={"KidShoes"}>Kids originals</MenuItem>
                    <MenuItem value={"Slides"}>Slides</MenuItem>
                    <MenuItem value={"WomanShoes"}>Womans</MenuItem>
                    <MenuItem value={"Global"}>Global</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="filter-categories">
              <Box sx={{ minWidth: 100 }}>
                <FormControl size="small" className="w-[200px] lg:w-[300px]">
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

        <Col lg="12">
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
