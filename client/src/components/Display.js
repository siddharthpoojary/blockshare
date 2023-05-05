import { useState } from "react";
import "./Display.css";

const Display = ({ contract, account }) => {
    const [data, setData] = useState("");
    const getData = async () => {
        let dataArray;
        const OtherAddress = document.querySelector(".address").value;
        try {
            if (OtherAddress) {
                dataArray = await contract.display(OtherAddress);
            } else {
                dataArray = await contract.display(account);
            }
        } catch (e) {
            alert("You dont have access");
        }
        const isEmpty = Object.keys(dataArray).length === 0;

        if (!isEmpty) {
            const str = dataArray.toString();
            const str_array = str.split(",");
            const images = str_array.map((item, i) => {
                return (
                    <a href={item} key={i} target="_blank">
                        <img key={i} src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`} alt="new" className="image-list mx-auto"></img>
                    </a>
                )
            })
            setData(images);
        } else {
            alert("No image to Display");
        }
    };

    return (
        <div className="image-display container-fluid text-center my-5">
            <div className="image-list mb-5 mx-5">{data}</div>
            <div className="container">
                <input type="text" className="form-control  mx-auto mt-3 fs-5 w-50 address" placeholder="Enter Address to Fetch Data" />
            </div>
            <button className="btn btn-outline-info mt-3 px-4  fs-5" onClick={getData}>Get Data</button>
        </div>
    );
}
export default Display;