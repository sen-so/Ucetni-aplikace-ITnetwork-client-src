import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { roundAndFormat } from "../utils/roundAndFormatMoney";
const SalesAndPurchasesTable = ({ label, items }) => {

    return (
        <div>
            <p>
                {label} ({items.length})
            </p>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Číslo faktury</td>
                        <td>Produkt</td>
                        <td>Cena</td>
                        <td>Datum splatnosti</td>
                    </tr>
                </thead>
                <tbody>
                    
                    {items.map((item, index) => (
                        <tr key={index + 1}>
                            <td>{index + 1}</td>
                            <td> <Link
                                        to={"/invoices/show/" + item._id}
                                        >{item.invoiceNumber}
                                    </Link></td>
                            <td>{item.product}</td>
                            <td className="text-nowrap">{roundAndFormat(item.price)}</td>
                            <td className="text-nowrap">{moment(item.dueDate).format("DD.MM.YYYY")}</td>
                        </tr>

                    ))}
                
                </tbody>

            </table>
        </div>
    );

};

export default SalesAndPurchasesTable;

/**
 * 
 * 
 * 

 * 
 */