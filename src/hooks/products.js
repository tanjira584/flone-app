import { useState, useEffect } from "react";

const useProductCategories = () => {
    const [prodCategories, setProdCategories] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => handleCategory(data));
    }, []);
    const handleCategory = (products) => {
        let allCategory = [];
        products.map((product) => {
            let categories = product.category;
            categories.map((category) => allCategory.push(category));
        });

        const noDup = () =>
            allCategory.filter((item, index, arr) => {
                return arr.indexOf(item) === index;
            });
        setProdCategories(noDup);
    };
    return [prodCategories];
};
const useProductTags = () => {
    const [prodTags, setProdTags] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => handleCategory(data));
    }, []);
    const handleCategory = (products) => {
        let allTag = [];
        products.map((product) => {
            let tags = product.tags;
            tags.map((tag) => allTag.push(tag));
        });

        const noDup = () =>
            allTag.filter((item, index, arr) => {
                return arr.indexOf(item) === index;
            });
        setProdTags(noDup);
    };
    return [prodTags];
};
const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return [products];
};
export { useProductCategories, useProductTags, useProducts };
