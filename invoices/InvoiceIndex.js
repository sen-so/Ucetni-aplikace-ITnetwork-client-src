/*  _____ _______         _                      _
 * |_   _|__   __|       | |                    | |
 *   | |    | |_ __   ___| |___      _____  _ __| | __  ___ ____
 *   | |    | | '_ \ / _ \ __\ \ /\ / / _ \| '__| |/ / / __|_  /
 *  _| |_   | | | | |  __/ |_ \ V  V / (_) | |  |   < | (__ / /
 * |_____|  |_|_| |_|\___|\__| \_/\_/ \___/|_|  |_|\_(_)___/___|
 *                                _
 *              ___ ___ ___ _____|_|_ _ _____
 *             | . |  _| -_|     | | | |     |  LICENCE
 *             |  _|_| |___|_|_|_|_|___|_|_|_|
 *             |_|
 *
 *   PROGRAMOVÁNÍ  <>  DESIGN  <>  PRÁCE/PODNIKÁNÍ  <>  HW A SW
 *
 * Tento zdrojový kód je součástí výukových seriálů na
 * IT sociální síti WWW.ITNETWORK.CZ
 *
 * Kód spadá pod licenci prémiového obsahu a vznikl díky podpoře
 * našich členů. Je určen pouze pro osobní užití a nesmí být šířen.
 * Více informací na http://www.itnetwork.cz/licence
 */

import React, { useEffect, useState } from "react";

import { apiDelete, apiGet } from "../utils/api";

import InvoiceTable from "./InvoiceTable";
import InvoiceStatistics from "./InvoiceStatistics";

import InvoiceFilter from "./InvoiceFilter";

const InvoiceIndex = (props) => {
    const [invoices, setInvoices] = useState([]);

    const [sellerListState, setSellerList] = useState([]);
    const [buyerListState, setBuyerList] = useState([]);
    const [filterState, setFilter] = useState({
        sellerIco: undefined,
        buyerIco: undefined,

        product: undefined,

        minPrice: undefined,
        maxPrice: undefined,

        fromDate: undefined,
        toDate: undefined,

        limit: undefined,
    })

    const deleteInvoice = async (id) => {
        try {
            await apiDelete("/api/invoices/" + id);
        } catch (error) {
            console.log(error.message);
            alert(error.message)
        }
        setInvoices(invoices.filter((item) => item._id !== id));
    };

    useEffect(() => {
        apiGet("/api/invoices").then((data) => setInvoices(data));
        //načítání seznamů pro filtrování
        apiGet("/api/persons").then((data) => {
            setSellerList(data);
            setBuyerList(data);
        });
    }, []);


    const handleChange = (e) => {
        // pokud vybereme prázdnou hodnotu (máme definováno jako true/false/'' v komponentách), nastavíme na undefined
        if (e.target.value === "false" || e.target.value==="true" || e.target.value === '') {
            setFilter(prevState => {
                return {... prevState, [e.target.name]: undefined}
            });
        } else {
            setFilter( prevState => {
                return {... prevState, [e.target.name]: e.target.value}
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const params = filterState;

        const data= await apiGet("/api/invoices", params);
        setInvoices(data);
    }

    return (
        <div>
            <h1>Seznam faktur</h1>
            <InvoiceFilter
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                sellerList={sellerListState}
                buyerList={buyerListState}
                filter={filterState}
                confirm="Filtrovat faktury"
            />
            <InvoiceStatistics />
            <InvoiceTable
                deleteInvoice={deleteInvoice}
                items={invoices}
                label="Počet faktur:"
            />
        </div>
    );
};
export default InvoiceIndex;
