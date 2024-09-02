import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export function Airdrop(){
    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendAirdrop(){
        // alert("hi");
        const amount = document.getElementById('amount').value;
        await connection.requestAirdrop(wallet.publicKey,amount * 1000000000)
        alert("Successfully Airdroped");
    }
    return <div>
        <h3>Hi Welcome!</h3>
        <div><input id="amount" type="text" placeholder="Enter SOL" />
        <button onClick={sendAirdrop}>Send AirDrop</button>
        </div>
        
    </div>
}