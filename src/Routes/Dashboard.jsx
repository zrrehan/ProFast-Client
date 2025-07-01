import { Suspense } from "react";
import AllSentParceSent from "../Components/Dashboard/AllSentParceSent";

function Dashboard() {
    const dataPromise = fetch("http://localhost:3000/get-items")
        .then((res) => res.json());

    return(
        <div>
            <Suspense>
                <AllSentParceSent dataPromise={dataPromise}></AllSentParceSent>
            </Suspense>
        </div>
    )
}

export default Dashboard;