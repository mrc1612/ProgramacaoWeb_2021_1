import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';


import { addProduct, getProductsLength, findProduct, editProduct } from './data'

import './ProductManagement.scss';

function ProductManagement() {
    const { register, handleSubmit, setValue } = useForm();
    var _id;
    var create = true;

    var [url, setUrl] = useState("");

    //  Função de cadastro do produto

    const onSubmit = ({id, name, description, price, image}) => {
        if(create) {
            addProduct(
                {
                    id: getProductsLength() + 1,
                    name: name,
                    image: image,
                    description: description,
                    price: price,
                }
            );
            
            alert("Produto adicionado com sucesso!");
            clearValue();

        } else {
            editProduct(
                {
                    name: name,
                    image: image,
                    description: description,
                    price: price,
                },
                _id
            );
            alert("Produto alterado com sucesso!");
        }
    }

    // Função para limpar os campos do Form após o Submit

    const clearValue = () => {
        setValue("name", "");
        setValue("description", "");
        setValue("price", "");
        setValue("image", "");
    }

    // Função para resgatar os valores do produto

    const fetchProductData = () => {
        let path = window.location.pathname;
        path = path.split('/');
        
        _id = path[2];

        const product = findProduct(_id);
        
        if(product != null) {
            setValue("name", product.name);
            setValue("description", product.description);
            setValue("price", product.price);
            setValue("image", product.image);
            create = false;
        }
    }

    fetchProductData();

    const setImageUrl = (url) => {
        setUrl(url);
    }

    return (
        <>
            <button className="back-to-products-btn"><Link to="/produtos"><AiOutlineArrowLeft/></Link></button>
            <div className="product-management-content">
                <img {...register("image_popup")} src={_id !== undefined ? findProduct(_id).image : url} alt="Produto" />
                <form onSubmit={handleSubmit(onSubmit)} action="/criarproduto">
                    <label>
                        <h3>Nome do produto:</h3>
                        <input type="text" {...register("name")} placeholder="Nome do produto" required={true} />
                    </label>
                    <label>
                        <h3>Descrição:</h3>
                        <textarea type="text" {...register("description")} placeholder="Descrição" required={true} />
                    </label>
                    <label>
                        <h3>Preço:</h3>
                        <input type="number" step=".01" {...register("price")} placeholder="Preço" required={true} />
                    </label>
                    <label>
                        <h3>Imagem:</h3>
                        <input type="text" {...register("image")} placeholder="Imagem" required={true} onChange={e => setImageUrl(e.target.value)}/>
                    </label>
                    <input type="submit" className="btn-submit"/>
                </form>
            </div>
        </>
    )
}

export default ProductManagement


