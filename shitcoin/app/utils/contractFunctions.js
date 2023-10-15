// import detectEthereumProvider from '@metamask/detect-provider';
// import { ethers, Contract } from 'ethers';

// const getBlockchain = () =>
//   new Promise( async (resolve, reject) => {
//     let provider = await detectEthereumProvider();
//     if(provider) {
//       await provider.request({ method: 'eth_requestAccounts' });
//       const networkId = await provider.request({ method: 'net_version' })
//       provider = new ethers.providers.Web3Provider(provider);
//       const signer = provider.getSigner();
//       const stakingContract = new Contract(
//         "0x7ffd8A206c64759C54A90F3584e50b3A22b674Da",
//         [
//           {
//             "inputs": [
//               {
//                 "internalType": "uint256",
//                 "name": "i",
//                 "type": "uint256"
//               }
//             ],
//             "name": "end",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//           },
//           {
//             "inputs": [
//               {
//                 "internalType": "uint256",
//                 "name": "_lower",
//                 "type": "uint256"
//               },
//               {
//                 "internalType": "uint256",
//                 "name": "_maturity",
//                 "type": "uint256"
//               },
//               {
//                 "internalType": "uint8",
//                 "name": "_rate",
//                 "type": "uint8"
//               },
//               {
//                 "internalType": "uint8",
//                 "name": "_penalization",
//                 "type": "uint8"
//               }
//             ],
//             "name": "set",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//           },
//           {
//             "inputs": [
//               {
//                 "internalType": "contract IERC20",
//                 "name": "_erc20",
//                 "type": "address"
//               },
//               {
//                 "internalType": "uint8",
//                 "name": "_rate",
//                 "type": "uint8"
//               },
//               {
//                 "internalType": "uint8",
//                 "name": "_penalization",
//                 "type": "uint8"
//               },
//               {
//                 "internalType": "uint256",
//                 "name": "_lower",
//                 "type": "uint256"
//               }
//             ],
//             "stateMutability": "nonpayable",
//             "type": "constructor"
//           },
//           {
//             "anonymous": false,
//             "inputs": [
//               {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "user",
//                 "type": "address"
//               },
//               {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "value",
//                 "type": "uint256"
//               },
//               {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "penalty",
//                 "type": "uint256"
//               },
//               {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "interest",
//                 "type": "uint256"
//               },
//               {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "index",
//                 "type": "uint256"
//               }
//             ],
//             "name": "StakeEnd",
//             "type": "event"
//           },
//           {
//             "anonymous": false,
//             "inputs": [
//               {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "user",
//                 "type": "address"
//               },
//               {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "value",
//                 "type": "uint256"
//               },
//               {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "index",
//                 "type": "uint256"
//               }
//             ],
//             "name": "StakeStart",
//             "type": "event"
//           },
//           {
//             "inputs": [
//               {
//                 "internalType": "uint256",
//                 "name": "_value",
//                 "type": "uint256"
//               }
//             ],
//             "name": "start",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//           },
//           {
//             "inputs": [],
//             "name": "asset",
//             "outputs": [
//               {
//                 "internalType": "contract IERC20",
//                 "name": "",
//                 "type": "address"
//               }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//           },
//           {
//             "inputs": [],
//             "name": "interestRate",
//             "outputs": [
//               {
//                 "internalType": "uint8",
//                 "name": "",
//                 "type": "uint8"
//               }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//           },
//           {
//             "inputs": [
//               {
//                 "internalType": "address",
//                 "name": "",
//                 "type": "address"
//               },
//               {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//               }
//             ],
//             "name": "ledger",
//             "outputs": [
//               {
//                 "internalType": "uint256",
//                 "name": "from",
//                 "type": "uint256"
//               },
//               {
//                 "internalType": "uint256",
//                 "name": "amount",
//                 "type": "uint256"
//               },
//               {
//                 "internalType": "uint256",
//                 "name": "penalization",
//                 "type": "uint256"
//               },
//               {
//                 "internalType": "uint256",
//                 "name": "to",
//                 "type": "uint256"
//               },
//               {
//                 "internalType": "bool",
//                 "name": "ended",
//                 "type": "bool"
//               }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//           },
//           {
//             "inputs": [
//               {
//                 "internalType": "address",
//                 "name": "_address",
//                 "type": "address"
//               }
//             ],
//             "name": "ledgerLength",
//             "outputs": [
//               {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//               }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//           },
//           {
//             "inputs": [],
//             "name": "lowerAmount",
//             "outputs": [
//               {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//               }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//           },
//           {
//             "inputs": [],
//             "name": "maturity",
//             "outputs": [
//               {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//               }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//           },
//           {
//             "inputs": [],
//             "name": "penalizationRate",
//             "outputs": [
//               {
//                 "internalType": "uint8",
//                 "name": "",
//                 "type": "uint8"
//               }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//           }
//         ],
//         signer
//       );
//       resolve({stakingContract});
//       return;
//     }
//     reject('Install Metamask');
//   });

// export default getBlockchain;

// import { ethers, Contract } from "ethers";
// const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org");
// const signer = provider.getSigner();
// const stakingContractAddress = "0x7ffd8A206c64759C54A90F3584e50b3A22b674Da";
// const stakingContractABI = [
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "i",
//         type: "uint256",
//       },
//     ],
//     name: "end",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "_lower",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "_maturity",
//         type: "uint256",
//       },
//       {
//         internalType: "uint8",
//         name: "_rate",
//         type: "uint8",
//       },
//       {
//         internalType: "uint8",
//         name: "_penalization",
//         type: "uint8",
//       },
//     ],
//     name: "set",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "contract IERC20",
//         name: "_erc20",
//         type: "address",
//       },
//       {
//         internalType: "uint8",
//         name: "_rate",
//         type: "uint8",
//       },
//       {
//         internalType: "uint8",
//         name: "_penalization",
//         type: "uint8",
//       },
//       {
//         internalType: "uint256",
//         name: "_lower",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "user",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "penalty",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "interest",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "index",
//         type: "uint256",
//       },
//     ],
//     name: "StakeEnd",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "user",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "index",
//         type: "uint256",
//       },
//     ],
//     name: "StakeStart",
//     type: "event",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "_value",
//         type: "uint256",
//       },
//     ],
//     name: "start",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "asset",
//     outputs: [
//       {
//         internalType: "contract IERC20",
//         name: "",
//         type: "address",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "interestRate",
//     outputs: [
//       {
//         internalType: "uint8",
//         name: "",
//         type: "uint8",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     name: "ledger",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "from",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "penalization",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "to",
//         type: "uint256",
//       },
//       {
//         internalType: "bool",
//         name: "ended",
//         type: "bool",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "_address",
//         type: "address",
//       },
//     ],
//     name: "ledgerLength",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "lowerAmount",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "maturity",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "penalizationRate",
//     outputs: [
//       {
//         internalType: "uint8",
//         name: "",
//         type: "uint8",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
// ];

// const stakingContract = new Contract(
//   stakingContractAddress,
//   stakingContractABI,
//   provider
// );

// const initializeStake = async () => {
//   try {
//     const length = await stakingContract.ledgerLength(
//       "0x0797ffD21960006Af170829EC0e7F80C15B5B364"
//     );
//     console.log(
//       `Ledger length for address: ${length.toString()}`
//     );
//   } catch (error) {
//     console.error("Error calling ledgerLength:", error);
//   }
// };

// export { initializeStake };

