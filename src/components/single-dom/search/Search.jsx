import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './search.scss'
import { AiOutlineSearch } from "react-icons/ai";
import HeadlessTippy from "@tippyjs/react/headless";
import useDebounce from "../../customHook/useDebounce";
import { getDocs, collection ,query} from "firebase/firestore";
import { db } from "../../../utils/firebase/firebase";
import SearchItem from "./SearchItem/SearchItem";

const Search = ({navOpen,setNavOpen}) => {
  const [searchResult, setSearchResult] = useState([]);
  const [value, setValue] = useState("");
  const [hideToolTip, setToolTip] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const debounce = useDebounce(value, 500);

  const handleTooltip = () => {
    setToolTip(false);
  };

  const handleValue = (e) => {
    const value = e.target.value;
    if (value.startsWith(" ")) {
      return;
    }
    setValue(value);
  };

  const handleSearch = () => {
    if (!value) {
      return;
    } else {
      setValue("");
      localStorage.setItem("search", value);
      window.location.href = "/search";
    }
  };

  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      setLoading(false);
      return;
    }
    const searchProducts = async () => {
      const q = query(collection(db, "Products"));
      const getData = await getDocs(q);
      getData.forEach((snap) => {
        const product = snap.data();
        product.ID = snap.id;
        if (product.productName.toLowerCase().includes(debounce.toLowerCase())) {
          setSearchResult((products) => [...products, product]);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
    };
    searchProducts();
    return () => {
      setLoading(true);
      setSearchResult([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce]);
  return (
    <HeadlessTippy
      interactive
      placement="bottom"
      visible={
        (hideToolTip && searchResult.length > 0) ||
        (loading && searchResult.length === 0)
      }
      render={(attrs) => (
        <div className="result" tabIndex="-1" {...attrs}>
          <div className="wrapper">
            <span className="title">Sản phẩm</span>
            {searchResult.map((item, index) => {
              return (
                <SearchItem
                  data={item}
                  key={index}
                  onClick={() => {
                    localStorage.setItem("productDetail", JSON.stringify(item));
                    setValue("");
                    setSearchResult([]);
                    setNavOpen(false)
                  }}
                />
              );
            })}
            {loading && searchResult.length === 0 && (
              <div className="loading">
                <div className="loading-avt"></div>
                <div className="loading-info">
                  <div className="loading-name"></div>
                  <div className="loading-price"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      onClickOutside={handleTooltip}
    >
      <div class=" flex lg:items-center max-w-[550px]">
        <div class="relative search">
          <input
            ref={inputRef}
            value={value}
            onChange={handleValue}
            onFocus={() => {
              setToolTip(true);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch(e);
              }
            }}
            type="text"
            class="h-9  font-light w-60
           border border-black  px-2 py-4 bg-slate-100  z-0 focus:shadow focus:outline-none"
            placeholder="Search anything..."
          />
         <button className=" px-2 py-2 h-[50px] bg-black text-white">
          Search
         </button>
        </div>
      </div>
    </HeadlessTippy>
  );
};

export default Search;
