 var web3;
 var timestamp;
 var interval;
 var myaddress;
 var contract;

 const contractadd = "0xc0349982a4717aa47113c564c0e8a39bb422617c";
 const tokenaddress = "0x1c91b818e244c20732f917fde4c872644bcc544d";

 let devbalance = document.getElementById("devbalance");
 let mybalance = document.getElementById("mybalance");
 let lockedMoney = document.getElementById("locked-money");


 


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





 async function onPageLoad() {
     await loadweb3();

     if (addr == undefined) {

         walcon.style.display = "block";
         need1.style.display = "none";
         need2.style.display = "none";
         need3.style.display = "none";
         need4.style.display = "none";
         myacc.style.display = "none";
         balown.style.display = "none";
         titlearea.style.display = "none";
         loaderimg.style.display = "block";
         desc.style.display = "none";
         details.style.display = "none";
         icons.style.display = "none";

     }

     let accounts = await web3.eth.getAccounts();
     myaddress = accounts[0];
     console.log(myaddress);
     document.getElementById("con").innerHTML = myaddress; 

//// use the appropriate BN loading approach:
//// 1: from web3
// const BN = web3.utils.BN
//// 2: OR using <script>: no additional steps, BN already is global

// REMOVE THIS LINE FROM YOUR CODE
// required just for representative output of this example:

 
     

     var tokenInst = new web3.eth.Contract(minABI,contractadd); 
    tokenInst.methods.balanceOf(myaddress).call().then(function (bala) {
      
        console.log(bala)

        data = bala

        const balanceWeiString = data
        const balanceWeiBN = new BN(balanceWeiString)

        const decimals = 18
        const decimalsBN = new BN(decimals)
        const divisor = new BN(10).pow(decimalsBN)

        const beforeDecimal = balanceWeiBN.div(divisor)
        

        console.log(beforeDecimal.toString())   
        document.getElementById("zoidbal").innerHTML = beforeDecimal.toString(); 
        
     })

  


     try {
        
     } catch (error) {
         console.log(error);
     }




     updateBalances();
 }




 async function updateBalances() {
     let value = await web3.eth.getBalance(myaddress);


     mybalance.innerText = web3.utils.fromWei(value, 'ether');
   



 }
 


 onPageLoad();

 