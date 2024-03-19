import React, { useEffect, useState } from "react";

import { apiGet } from "../utils/api";
import PersonStatisticTable from "./PersonStatisticTable";


const PersonStatisticIndex = () => {
    const [statistics, setStatistics] = useState();

    useEffect(() => {
        apiGet("/api/persons/statistics").then((data) => setStatistics(data));
    }, []);

    return (
        <div>
            <h2>Statistiky osob</h2>
            <PersonStatisticTable label="statistikyy" items={statistics}/>

        </div>
    );
};
export default PersonStatisticIndex;