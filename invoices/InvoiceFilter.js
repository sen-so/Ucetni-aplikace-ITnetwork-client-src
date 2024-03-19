import React from "react";
import InputSelect from "../components/InputSelect";
import InputField from "../components/InputField";


const InvoiceFilter = (props) => {

    const handleChange = (e) => {
        props.handleChange(e);
    }

    const handleSubmit = (e) => {
        props.handleSubmit(e);
    }

    const filter = props.filter;

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col">
                    <InputSelect
                        name="sellerIco"
                        items={props.sellerList}
                        handleChange={handleChange}
                        label="Vystavil"
                        prompt="nezadáno"
                        value={filter.sellerIco}
                    />
                </div>
                <div className="col">
                    <InputSelect
                        name="buyerIco"
                        items={props.buyerList}
                        handleChange={handleChange}
                        label="Odběratel"
                        prompt="nezadáno"
                        value={filter.buyerIco}
                    />
                </div>
                <div className="col">
                    <InputField
                        type="text"
                        name="product"
                        handleChange={handleChange}
                        label="Produkt"
                        prompt="Zadej název produktu"
                        value={filter.product ? filter.product : ''}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <InputField
                        type="number"
                        min="0"
                        name="minPrice"
                        handleChange={handleChange}
                        label="Cena od"
                        prompt="Zadej sumu"
                        value={filter.minPrice ? filter.minPrice : ''}
                    />
                </div>    <div className="col">
                    <InputField
                        type="number"
                        min="0"
                        name="maxPrice"
                        handleChange={handleChange}
                        label="Cena do"
                        prompt="Zadej sumu"
                        value={filter.maxPrice ? filter.maxPrice : ''}
                    />
                </div>    <div className="col">
                    <InputField
                        type="number"
                        min="1"
                        name="limit"
                        handleChange={handleChange}
                        label="Limit počtu faktur"
                        prompt="Zadej limit"
                        value={filter.limit ? filter.limit : ''}
                    />
                </div>
            </div>
            <div className="row col-4 ">
                <div className="col">
                    <InputField
                        type="date"
                        min="0"
                        name="fromDate"
                        handleChange={handleChange}
                        label="Splatnost od"
                        prompt="Zadej datum"
                        value={filter.fromDate ? filter.fromDate : ""}
                    />
                </div>
                <div className="col">
                    <InputField
                        type="date"
                        min="0"
                        name="toDate"
                        handleChange={handleChange}
                        label="Splatnost do"
                        prompt="Zadej datum"
                        value={filter.toDate ? filter.toDate : ""}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input
                        type="submit"
                        className="btn btn-secondary float-right mt-2"
                        value={props.confirm}
                    />

                </div>

            </div>


        </form>
    );


}
export default InvoiceFilter;