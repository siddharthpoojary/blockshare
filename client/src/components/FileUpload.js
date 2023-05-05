import { useState } from "react";
import axios from "axios";
import "./FileUpload.css";

const FileUpload = ({ contract, account, provider }) => {
    const [file, setFile] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (file) {
            try {
                const formData = new FormData();
                formData.append("file", file);

                const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        pinata_api_key: `d3405f98c2aa26ad90ef`,
                        pinata_secret_api_key: `d0a3f317cc3b64f51e17d3b7a9d5d039179e94d4826ab2dd97e06f3909bcfea3`,
                        "Content-Type": "multipart/form-data",
                    },
                });
                const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
                contract.add(account, ImgHash);
                alert("Successfully Uploaded File");
            } catch (e) {
                alert("Unable to upload file to pinata");
            }
        }
    };

    const retrieveFile = (e) => {
        const data = e.target.files[0];
        //console.log(data);
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(data);
        reader.onloadend=()=>{
            setFile(e.target.files[0]);
        }
        e.preventDefault();
    };

    return (
        <div className="container text-center my-5">
            <form className="form w-50 mx-auto my-5" onSubmit={handleSubmit}>
                <label htmlFor="fileUpload" className="form-label fs-4"></label>
                <input className="form-control  fs-5" disabled={!account} type="file" id="fileUpload" name="data" onChange={retrieveFile} />
                <button type="submit"  className="btn btn-outline-info  mt-3 px-4 fs-5">Upload File</button>
            </form>
        </div>
    );
}
export default FileUpload;