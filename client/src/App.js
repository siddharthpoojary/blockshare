import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";
import './App.css';
import{SiHiveBlockchain} from 'react-icons/si'
import videobg from './videobg.mp4';

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

        const contract = new ethers.Contract(
          contractAddress, Upload.abi, signer
        );
        //console.log(contract);
        setContract(contract);
        setProvider(provider);
      }
      else {
        alert("Metamask is not installed");
      }
    };
    provider && loadProvider()
  }, []);

  return (
    <div className="main-app">
       <video className='videoTag' autoPlay loop muted>
      <source src={videobg} type='video/mp4' />
      </video>
      {!modalOpen && (<button className="share btn btn-warning  fs-5 btn-sm px-3 ms-3 mt-3" onClick={() => setModalOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
</svg></button>)}
      {modalOpen && (<Modal setModalOpen={setModalOpen} contract={contract}></Modal>)}
      <div className="App">
     
        <h1 className="logo"> <SiHiveBlockchain className=' my-1'/>BlockShare</h1>
        <p className="account-id  text-center h4 mt-4">Account : {account ? account : "Account not connected"}</p>
        <FileUpload account={account} provider={provider} contract={contract}></FileUpload>
        <Display account={account} contract={contract}></Display>
        
      </div>
    </div>
  );
}
export default App;