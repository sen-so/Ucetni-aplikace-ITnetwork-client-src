import React, { useEffect, useState } from "react";

import { apiGet } from "../utils/api";
import SalesAndPurchasesTable from "./SalesAndPurchasesTable";


const SalesAndPurchases = ({ identification }) => {
    const [sales, setSales] = useState([]);
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        apiGet("/api/identification/" + identification + "/sales").then((data) => setSales(data));
    }, [identification]);

    useEffect(() => {
        apiGet("/api/identification/" + identification + "/purchases").then((data) => setPurchases(data));
    }, [identification]);


    return (
        <div>
            <SalesAndPurchasesTable
                label="Faktury vystavené:"
                items={sales}
            />
            <SalesAndPurchasesTable
                label="Faktury přijaté:"
                items={purchases}
            />
        </div>
    );
};
export default SalesAndPurchases;