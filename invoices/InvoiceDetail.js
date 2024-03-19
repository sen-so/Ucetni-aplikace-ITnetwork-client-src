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

import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {apiGet} from "../utils/api";
import moment from "moment";
import { roundAndFormat } from "../utils/roundAndFormatMoney";

const InvoiceDetail = () => {
    const {id} = useParams();
    const [invoice, setInvoice] = useState({});

    useEffect(() => {
        apiGet("/api/invoices/" + id).then((data) => setInvoice(data));
    }, [id]);


    
    return (
        <>
            <div>
                <h1>Detail faktury</h1>
                <hr/>
                <h3>{invoice.invoiceNumber} ({invoice.product})</h3>
                <p>
                    <strong>Datum splatnosti:</strong>
                    <br/>
                    {moment(invoice.dueDate).format("DD.MM.YYYY")}
                </p>
                <p>
                    <strong>Datum vystavení:</strong>
                    <br/>
                    {moment(invoice.issued).format("DD.MM.YYYY")}
                </p>
                <p>
                    <strong>Cena:</strong>
                    <br/>
                    {roundAndFormat(invoice.price)}
                </p>
                <p>
                    <strong>DPH:</strong>
                    <br/>
                    {invoice.vat}
                </p>
                <p>
                    <strong>Poznámka:</strong>
                    <br/>
                    {invoice.note}
                </p>
                <div className="border-top border-success">
                <p>
                    <strong>Vystavil:</strong>
                    <br/>
                    {invoice.seller?.name}
                </p>
                <p>
                    <strong>Vystavil:</strong>
                    <br/>
                    {invoice.buyer?.name}
                </p>
                </div>
            </div>
        </>
    );
};

export default InvoiceDetail;
