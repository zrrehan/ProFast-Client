import { use, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

function AllSentParceSent({ dataPromise }) {
    let data = use(dataPromise);
    const {user} = useContext(AuthContext);
    data = data.filter((singleData) => singleData.senderEmail === user.email)
    let dataCount = 0;
    return(
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Cost</th>
                            <th>Payment</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((singleData) => {
                                dataCount += 1;
                                return <tr>
                                    <th>{dataCount}</th>
                                    <th>{singleData.parcelName}</th>
                                    <td>{singleData.document === "no" ? "Non Document":"Document"}</td>
                                    <td>BDT {singleData.payment}</td>
                                    <td>{singleData.paymentStatus === "Unpaid" ? <div className="badge badge-soft badge-error">Unpaid</div> : <div className="badge badge-soft badge-success">Paid</div>}</td>
                                    <td className="space-x-2 space-y-2 md:space-y-0">
                                        {
                                            singleData.paymentStatus === "Unpaid" && <button className="btn btn-soft btn-accent rounded-3xl">Pay</button>
                                        }
                                        <button className="btn rounded-3xl btn-soft btn-error">Delete</button>
                                    </td>
                            </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllSentParceSent;