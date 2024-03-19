import { apiGet } from "../utils/api";
import React, { useEffect, useState } from "react";
import { roundAndFormat } from "../utils/roundAndFormatMoney";

const InvoiceStatistics = () => {
    const [invoiceStatistics, setInvoiceStatistics] = useState({});

    const currentYear = new Date().getFullYear();
    useEffect(() => {
        apiGet("/api/invoices/statistics").then((data) => setInvoiceStatistics(data));
    }, []);

    console.log(invoiceStatistics);

    return (

        <>  <hr></hr>
            <div className="row">
                <div className="col-md-6">
                    <p>  <strong>Suma {currentYear} [Kč]</strong> <h5> {roundAndFormat(invoiceStatistics.currentYearSum)} </h5>
                    </p>
                </div>
                <div className="col-md-6">
                    <p>  <strong>Suma celkem [Kč]</strong>  <h5>{roundAndFormat(invoiceStatistics.allTimeSum)}</h5>

                    </p>
                </div>
            </div>
            <hr></hr>

        </>
    )
}



export default InvoiceStatistics;