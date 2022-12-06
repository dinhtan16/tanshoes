import React, { useState } from "react";
import { storage, db } from "../../utils/firebase/firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { collection, setDoc, doc } from "firebase/firestore";
export const AddProducts = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productImg, setProductImg] = useState([]);
  const [error, setError] = useState("");
  const [sizeCheck, setSizeCheck] = useState([]);
  const [productDes, setProductDescription] = useState("");
  const [categories, setCategories] = useState("");
  const [color, setColor] = useState("");
  const [highlight, setHighlight] = useState("");
  // const types = ["image/png", "image/jpeg"]; // image types
  const productImgHandler = (e) => {
    // let selectedFile = e.target.files[0];
    // if (selectedFile && types.includes(selectedFile.type)) {
    //   setProductImg(prev => [...prev,selectedFile]);
    //   setError("");
    // } else {
    //   setProductImg(null);
    //   setError("Please select a valid image type (jpg or png)");
    // }
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setProductImg((prevState) => [...prevState, newImage]);
    }
  };

  // console.log(imgUrls)

  const addProduct = async (e) => {
    e.preventDefault();
    const handleUploadImage = () => {
      return new Promise((resolve) => {
        let listUrls = [];
        productImg.forEach(async (item, index) => {
          const storageRef = ref(storage, `product-images/${item.name}`);
          //upload
          await uploadBytes(storageRef, item);
          const url = await getDownloadURL(ref(storage, storageRef));
          listUrls.push(url);

          if (index === productImg.length - 1) {
            resolve(listUrls);
          }
        });
      });
    };
    const img = await handleUploadImage();
    //ref storage
    await setDoc(doc(collection(db, "Products")), {
      ProductName: productName,
      ProductPrice: Number(productPrice),
      ProductImg: [...img],
      ProductSize: sizeCheck,
      ProductDescription: productDes,
      Categories: categories,
      Productcolor: color,
      ProductHighlight: highlight,
    })
      .then(() => {
        setProductName("");
        setProductPrice(0);
        setProductImg("");
        setError("");
        setProductDescription("");
        setCategories("");
        setColor("");
        setHighlight("");
        document.getElementById("file").value = "";
      })
      .catch((err) => setError(err.message));
  };
  const sizeList = [
    {
      id: 1,
      size: 37,
      isChecked: false,
    },
    {
      id: 2,
      size: 38,
      isChecked: false,
    },
    {
      id: 3,
      size: 39,
      isChecked: false,
    },
    {
      id: 4,
      size: 40,
      isChecked: false,
    },
    {
      id: 5,
      size: 41,
      isChecked: false,
    },
  ];

  const handleSize = ({ size }) => {
    if (sizeCheck.includes(size)) {
      setSizeCheck((prev) => prev.filter((item) => item !== size));
    } else {
      setSizeCheck((prev) => [...prev, size]);
    }
  };
  return (
    <div>
      <br />
      <h2>ADD PRODUCTS</h2>
      <hr />
      <form autoComplete="off" className="form-group" onSubmit={addProduct}>
        <label htmlFor="product-name">Product Name</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <br />
        <label htmlFor="highlight">HighLight</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={(e) => setHighlight(e.target.value)}
          value={highlight}
        />
        <br />
        <label htmlFor="product-description">Product des</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={(e) => setProductDescription(e.target.value)}
          value={productDes}
        />
        <br />
        <label htmlFor="categories">Categories</label>
        <select
          className="h-[40px] w-[200px] ml-12 mb-6 border border-black"
          value={categories}
          onChange={(e) => {
            const selectedFood = e.target.value;
            setCategories(selectedFood);
          }}
        >
          <option value="Men Shoes">Men Shoes</option>
          <option value="Slides">Slides</option>
          <option value="Kid originals">Kid originals</option>
        </select>
        <br />
        <input
          type="text"
          className="form-control"
          required
          onChange={(e) => setCategories(e.target.value)}
          value={categories}
        />
        <label htmlFor="color">Color</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
        <br />

        <label>Product Size</label>
        <div className="flex">
          {sizeList.map((item) => {
            return (
              <div key={item.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={sizeCheck.includes(item.size)}
                  className="w-[24px] h-[24px] shrink-0 ml-2"
                  onChange={() => handleSize(item)}
                  value={item.size}
                />
                <span>{item.size}</span>
              </div>
            );
          })}
        </div>
        <br />
        <label htmlFor="product-price">Product Price</label>
        <input
          type="number"
          className="form-control"
          required
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        />
        <br />
        <label htmlFor="product-img">Product Image</label>
        <input
          type="file"
          className="form-control"
          id="file"
          required
          onChange={productImgHandler}
        />
        <br />
        <button type="submit" className="btn btn-success btn-md mybtn">
          ADD
        </button>
      </form>
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};
