import React from "react";
import { roundAndFormat } from "../utils/roundAndFormatMoney";
const PersonStatisticTable = ({ label, items }) => {

    return (
        <div className="col-5">

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Jméno fyzické/právnícké osoby</th>
                        <th>Příjmy</th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map((item, index) => (
                        <tr key={index + 1}>
                            <td>{index + 1}</td>
                            <td>{item.personName}</td>
                            <td>{roundAndFormat(item.revenue)} ,- Kč</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default PersonStatisticTable;