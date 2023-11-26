 
  await loadweb3();

let tokenAddress = "0x20fe562d797a42dcb3399062ae9546cd06f63280";
let walletAddress = "0xdD440e8eCA5F1F3e6D5ffE903148EFB374942df2";

// The minimum ABI to get ERC20 Token balance
let minABI = [
  // balanceOf
  {
    "constant":true,
    "inputs":[{"name":"_owner","type":"address"}],
    "name":"balanceOf",
    "outputs":[{"name":"balance","type":"uint256"}],
    "type":"function"
  },
  // decimals
  {
    "constant":true,
    "inputs":[],
    "name":"decimals",
    "outputs":[{"name":"","type":"uint8"}],
    "type":"function"
  }
];

let contract = new web3.eth.Contract(minABI,tokenAddress);
async function getBalance() {
    balance = await contract.methods.balanceOf(walletAddress).call();
  return balance;
}

getBalance().then(function (result) {
    console.log(result);
});