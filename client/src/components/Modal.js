import { useEffect } from "react";
import "./Modal.css";

const Modal = ({ setModalOpen, contract }) => {
    const sharing = async () => {
        const address = document.querySelector(".modalAddress").value;
        await contract.allow(address);
    };
    const unshare = async () =>{
        const address = document.querySelector(".modalAddress").value;
        await contract.disallow(address);
    }
    useEffect(() => {
        const accessList = async () => {
            const addressList = await contract.shareAccess();
            let select = document.querySelector("#selectNumber");
            const options = addressList;

            for (let i = 0; i < options.length; i++) {
                let opt = options[i];
                let e1 = document.createElement("option");
                e1.textContent = opt;
                e1.value = opt;
                select.appendChild(e1);
            }
        };
        contract && accessList();
    }, []);

    return (
        <>
            <div className="modalBackground">
                <div className="modalContainer p-4">
                    <div className="share-box h3 text-center">Share with</div>
                    <input type="text" className="modalAddress form-control fs-5 " placeholder="Enter Address to Share" />
                    <form id="myForm">
                        <select name="" id="selectNumber" className="fs-5 w-100 mt-4 py-1">
                            <option className="modalAddress fs-5">People with access</option>
                        </select>
                    </form>
                    <div className="sharebuttons mt-5 text-center">
                        <button onClick={() => sharing()} className="btn btn-primary btn-sm  fs-5 mx-2 px-4">Share</button>
                        <button onClick={()=> unshare()} className="btn btn-secondary btn-sm  fs-5 mx-2 px-4">Unshare</button>
                        <button onClick={() => { setModalOpen(false) }} className="btn btn-danger btn-sm  fs-5 mx-2 px-4">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;