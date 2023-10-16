"use client";
import Image from "next/image";
import "../globals.css";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import {
  useAccount,
  useSwitchNetwork,
  useNetwork,
  useBalance,
  useContractWrite,
  useWaitForTransaction,
  useContractRead,
} from "wagmi";
import Footer from "../components/footer";
import Logo from "../../public/logo.png";
import arrow from "../../public/arrow.png";
import stakingAbi from "../config/abi/staking";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ethers } from "ethers";

export default function Staking() {
  const { isConnected, address } = useAccount();
  const { data } = useBalance({
    address,
    token: "0xe89715d87c33221bc76b4f3162cc4a1cb0da0e19",
  });
  const balance = data && Number(data.formatted).toFixed(4);
  const [isApproved, setIsApproved] = useState(false);
  const [ledgerLengthState, setLedgerLengthState] = useState(0);
  const [stakeAmount, setStakeAmount] = useState("");

  const {
    data: stakeResponse,
    isError: stakeError,
    isSuccess: stakeSuccess,
    write: stakeHook,
  } = useContractWrite({
    address: "0xfa316D2994D8165a3F50988FDA5ce08880dC7667",
    abi: [
      {
        inputs: [
          {
            internalType: "uint256",
            name: "i",
            type: "uint256",
          },
        ],
        name: "end",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_lower",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_maturity",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "_rate",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "_penalization",
            type: "uint8",
          },
        ],
        name: "set",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "contract IERC20",
            name: "_erc20",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "_rate",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "_penalization",
            type: "uint8",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "penalty",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "interest",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        name: "StakeEnd",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        name: "StakeStart",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_value",
            type: "uint256",
          },
        ],
        name: "start",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "asset",
        outputs: [
          {
            internalType: "contract IERC20",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "interestRate",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "ledger",
        outputs: [
          {
            internalType: "uint256",
            name: "from",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "penalization",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "to",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "ended",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_address",
            type: "address",
          },
        ],
        name: "ledgerLength",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "lowerAmount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "maturity",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "penalizationRate",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
    functionName: "start",
    chainId: 56,
  });

  const {
    data: approveResponse,
    isError: approveError,
    isSuccess: approveSuccess,
    write: approveHook,
  } = useContractWrite({
    address: "0xe89715d87c33221bc76b4f3162cc4a1cb0da0e19",
    abi: [
      { inputs: [], stateMutability: "nonpayable", type: "constructor" },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "amountBNB",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amountBOG",
            type: "uint256",
          },
        ],
        name: "AutoLiquify",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        inputs: [],
        name: "BuyBackFee",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "BuyBackWallet",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_maxTxAmount",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_walletMax",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "holder", type: "address" },
          { internalType: "address", name: "spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "spender", type: "address" }],
        name: "approveMax",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "adr", type: "address" }],
        name: "authorize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "autoLiquidityReceiver",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "newinPeriod", type: "uint256" },
          {
            internalType: "uint256",
            name: "newMinDistribution",
            type: "uint256",
          },
        ],
        name: "changeDistributionCriteria",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "newgas", type: "uint256" }],
        name: "changeDistributorSettings",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newLiquidityReceiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "newMarketingWallet",
            type: "address",
          },
          {
            internalType: "address",
            name: "newBuyBackWallet",
            type: "address",
          },
        ],
        name: "changeFeeReceivers",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "newLiqFee", type: "uint256" },
          { internalType: "uint256", name: "newRewardFee", type: "uint256" },
          { internalType: "uint256", name: "newMarketingFee", type: "uint256" },
          { internalType: "uint256", name: "newBuyBackFee", type: "uint256" },
          { internalType: "uint256", name: "extraSellFee", type: "uint256" },
        ],
        name: "changeFees",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "holder", type: "address" },
          { internalType: "bool", name: "exempt", type: "bool" },
        ],
        name: "changeIsDividendExempt",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "holder", type: "address" },
          { internalType: "bool", name: "exempt", type: "bool" },
        ],
        name: "changeIsFeeExempt",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "holder", type: "address" },
          { internalType: "bool", name: "exempt", type: "bool" },
        ],
        name: "changeIsTxLimitExempt",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "bool", name: "newValue", type: "bool" }],
        name: "changeRestrictWhales",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "bool", name: "enableSwapBack", type: "bool" },
          {
            internalType: "uint256",
            name: "newSwapBackLimit",
            type: "uint256",
          },
          { internalType: "bool", name: "swapByLimitOnly", type: "bool" },
        ],
        name: "changeSwapBackSettings",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "newLimit", type: "uint256" },
        ],
        name: "changeTxLimit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "newLimit", type: "uint256" },
        ],
        name: "changeWalletLimit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "claimDividend",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [],
        name: "dividendDistributor",
        outputs: [
          {
            internalType: "contract DividendDistributor",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getCirculatingSupply",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getOwner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "adr", type: "address" }],
        name: "isAuthorized",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "isBlacklisted",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "isDividendExempt",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "isFeeExempt",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "isOwner",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "isTxLimitExempt",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "launchedAt",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "liquidityFee",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address[]", name: "addresses", type: "address[]" },
          { internalType: "bool", name: "status", type: "bool" },
        ],
        name: "manage_blacklist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "marketingFee",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "marketingWallet",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [],
        name: "pair",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "restrictWhales",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "rewardsFee",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "router",
        outputs: [
          { internalType: "contract IDEXRouter", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "_rewardToken", type: "address" },
        ],
        name: "setRewardToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "swapAndLiquifyByLimitOnly",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "swapAndLiquifyEnabled",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "swapThreshold",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [],
        name: "totalFee",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalFeeIfSelling",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "tradingOpen",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bool", name: "newStatus", type: "bool" }],
        name: "tradingStatus",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "recipient", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "transfer",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "sender", type: "address" },
          { internalType: "address", name: "recipient", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address payable", name: "adr", type: "address" },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "adr", type: "address" }],
        name: "unauthorize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      { stateMutability: "payable", type: "receive" },
    ],
    functionName: "approve",
  });

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: approveResponse?.hash,
  });

  const ledgerLengthResponse = useContractRead({
    address: "0xfa316D2994D8165a3F50988FDA5ce08880dC7667",
    abi: [
      {
        inputs: [
          {
            internalType: "uint256",
            name: "i",
            type: "uint256",
          },
        ],
        name: "end",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_lower",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_maturity",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "_rate",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "_penalization",
            type: "uint8",
          },
        ],
        name: "set",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "contract IERC20",
            name: "_erc20",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "_rate",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "_penalization",
            type: "uint8",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "penalty",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "interest",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        name: "StakeEnd",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        name: "StakeStart",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_value",
            type: "uint256",
          },
        ],
        name: "start",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "asset",
        outputs: [
          {
            internalType: "contract IERC20",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "interestRate",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "ledger",
        outputs: [
          {
            internalType: "uint256",
            name: "from",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "penalization",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "to",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "ended",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_address",
            type: "address",
          },
        ],
        name: "ledgerLength",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "lowerAmount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "maturity",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "penalizationRate",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
    functionName: "ledgerLength",
    args: [address],
  });

  var amountStaked = 0;
  if (Number(ledgerLengthResponse.data) > 0) {
    const ledgerRecordsResponse = useContractRead({
      address: "0xfa316D2994D8165a3F50988FDA5ce08880dC7667",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "i",
              type: "uint256",
            },
          ],
          name: "end",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_lower",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_maturity",
              type: "uint256",
            },
            {
              internalType: "uint8",
              name: "_rate",
              type: "uint8",
            },
            {
              internalType: "uint8",
              name: "_penalization",
              type: "uint8",
            },
          ],
          name: "set",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IERC20",
              name: "_erc20",
              type: "address",
            },
            {
              internalType: "uint8",
              name: "_rate",
              type: "uint8",
            },
            {
              internalType: "uint8",
              name: "_penalization",
              type: "uint8",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "penalty",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "interest",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "index",
              type: "uint256",
            },
          ],
          name: "StakeEnd",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "index",
              type: "uint256",
            },
          ],
          name: "StakeStart",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_value",
              type: "uint256",
            },
          ],
          name: "start",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "asset",
          outputs: [
            {
              internalType: "contract IERC20",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "interestRate",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "ledger",
          outputs: [
            {
              internalType: "uint256",
              name: "from",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "penalization",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "to",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "ended",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_address",
              type: "address",
            },
          ],
          name: "ledgerLength",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "lowerAmount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "maturity",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "penalizationRate",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      functionName: "ledger",
      args: [address, Number(ledgerLengthResponse.data) - 1],
    });
    const response = ledgerLengthResponse.data;
    amountStaked =
      ledgerRecordsResponse &&
      ledgerRecordsResponse.data &&
      Number(ledgerRecordsResponse.data[1]) / 1000000000;
  }

  const {
    data: unstakeResponse,
    isError: unstakeError,
    isSuccess: unstakeSuccess,
    write: unstakeHook,
  } = useContractWrite({
    address: "0xfa316D2994D8165a3F50988FDA5ce08880dC7667",
    abi: [
      {
        inputs: [
          {
            internalType: "uint256",
            name: "i",
            type: "uint256",
          },
        ],
        name: "end",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_lower",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_maturity",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "_rate",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "_penalization",
            type: "uint8",
          },
        ],
        name: "set",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "contract IERC20",
            name: "_erc20",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "_rate",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "_penalization",
            type: "uint8",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "penalty",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "interest",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        name: "StakeEnd",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        name: "StakeStart",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_value",
            type: "uint256",
          },
        ],
        name: "start",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "asset",
        outputs: [
          {
            internalType: "contract IERC20",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "interestRate",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "ledger",
        outputs: [
          {
            internalType: "uint256",
            name: "from",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "penalization",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "to",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "ended",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_address",
            type: "address",
          },
        ],
        name: "ledgerLength",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "lowerAmount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "maturity",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "penalizationRate",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
    functionName: "end",
    chainId: 56,
  });

  const approveHandler = () => {
    try {
      approveHook({
        from: address,
        args: [
          "0xfa316D2994D8165a3F50988FDA5ce08880dC7667",
          Math.floor(Number(stakeAmount)) * 1000000000,
        ],
      });
    } catch (error) {
      toast.error("error approving spender contract");
    }
  };

  const stakeHandler = () => {
    try {
      stakeHook({
        from: address,
        args: [Math.floor(Number(stakeAmount)) * 1000000000],
      });
    } catch (error) {
      toast.error("error staking $BOB");
    }
  };

  const unstakeHandler = () => {
    try {
      unstakeHook({
        from: address,
        args: [Number(ledgerLengthResponse.data) - 1],
      });
    } catch (error) {
      toast.error("error staking $BOB");
    }
  }

  return (
    <div className=" flex flex-col justify-center w-full items-center h-screen  bg-gradient-to-r from-[#fb7405] via-[#DBA514] to-[#ffa617]">
      <Navbar></Navbar>
      <div className=" mt-24 shadow-xl flex-col flex items-center justify-center bg-black border-4 border-yellow-400 lg:w-[90rem]  w-80 h-[40rem]    rounded-2xl ">
        <p className="text-white ">Staking APY -&gt; 40%</p>
        {isConnected ? (
          <div className="flex-col justify-center items-center">
            <div className="flex lg:flex-row flex-col gap-4 lg:gap-x-32  bg-black rounded-xl shadow-2xl lg:p-4">
              <div className="token1container flex flex-col gap-5">
                <div className="lg:px-4 logo flex h-20 items-center ">
                  <Image alt="" className="w-16 h-16 " src={Logo} />
                  <h1 className="text-white font-Orbitron lg:text-lg text-xl ">
                    {" "}
                    $BOB{" "}
                  </h1>
                  <div className="flex items-center">
                    <h2 className="text-white font-Orbitron lg:text-lg text-sm ml-6">
                      {" "}
                      Balance:{" "}
                    </h2>
                    <h2 className="text-white font-mono lg:text-lg text-sm lg:mt-0 ml-1 pt-1">
                      {" "}
                      {balance}
                    </h2>
                  </div>
                  <div className="flex items-center">
                    <h2 className="text-white font-Orbitron lg:text-lg text-sm ml-6">
                      {" "}
                      Staked Amount:{" "}
                    </h2>
                    <h2 className="text-white font-mono lg:text-lg text-sm lg:mt-0 ml-1 pt-1">
                      {" "}
                      {amountStaked && amountStaked} $BOB
                    </h2>
                  </div>
                </div>

                <div className="bubble1  lg:ml-5 flex-col p-4 flex items-center justify-center bg-gray-800 lg:w-[30rem] lg:p-6 w-72 h-36 lg:h-36 rounded-3xl self-center">
                  <input
                    className="px-10 p-2 rounded-lg bg-gray-800 text-white font-semibold text-center"
                    placeholder="Enter Staked Amount"
                    value={stakeAmount}
                    onChange={(e) => setStakeAmount(e.target.value)}
                  />
                  <div className="buttons mt-5 lg:mt-7 flex gap-2 ">
                    <button
                      onClick={() => {
                        setStakeAmount((25 * balance) / 100);
                      }}
                      className="hover:scale-110 transition-transform border-2 border-white bg-gradient-to-r from-[#E57C23] to-[#E8AA42] rounded-full p-1 px-2 text-white font-bold "
                    >
                      {" "}
                      25%{" "}
                    </button>
                    <button
                      onClick={() => {
                        setStakeAmount((50 * balance) / 100);
                      }}
                      className="hover:scale-110 transition-transform border-2 border-white bg-gradient-to-r from-[#E57C23] to-[#E8AA42] rounded-full p-1 px-2 text-white font-bold "
                    >
                      {" "}
                      50%{" "}
                    </button>
                    <button
                      onClick={() => {
                        setStakeAmount((75 * balance) / 100);
                      }}
                      className="hover:scale-110 transition-transform border-2 border-white bg-gradient-to-r from-[#E57C23] to-[#E8AA42] rounded-full p-1 px-2 text-white font-bold "
                    >
                      {" "}
                      75%{" "}
                    </button>
                    <button
                      onClick={() => setStakeAmount(balance)}
                      className="hover:scale-110 transition-transform border-2 border-white bg-gradient-to-r from-[#E57C23] to-[#E8AA42] rounded-full p-1 px-2 text-white font-bold "
                    >
                      {" "}
                      MAX{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              {isSuccess && (
                <>
                  <p className="text-white text-center">
                    Approved Successfully.
                  </p>
                  <p className="text-white text-center">
                    Now Click on the Stake button to stake.
                  </p>
                </>
              )}
              {stakeResponse && (
                <p className="text-white text-center">Staked Successfully.</p>
              )}
              {unstakeResponse && (
                <p className="text-white text-center">Staked Successfully.</p>
              )}
              {!isApproved && !isSuccess && (
                <button
                  onClick={approveHandler}
                  className=" ml-[12rem] hidden lg:flex justify-center items-center mt-10 w-32 h-16 p-2 self-center bg-blend-luminosity bg-[#ffa617] px-5 rounded-full font-semibold border-4 border-yellow-400 hover:scale-110 transition-transform "
                >
                  {" "}
                  Approve
                </button>
              )}
              {isSuccess && (
                <button
                  onClick={stakeHandler}
                  className=" ml-[12rem] hidden lg:flex justify-center items-center mt-10 w-32 h-16 p-2 self-center bg-blend-luminosity bg-[#ffa617] px-5 rounded-full font-semibold border-4 border-yellow-400 hover:scale-110 transition-transform "
                >
                  {" "}
                  Stake
                </button>
              )}
              <div>
                {amountStaked > 0 && (
                  <button
                    onClick={unstakeHandler}
                    className=" ml-[12rem] hidden lg:flex justify-center items-center mt-10 w-32 h-16 p-2 self-center bg-blend-luminosity bg-[#ffa617] px-5 rounded-full font-semibold border-4 border-yellow-400 hover:scale-110 transition-transform "
                  >
                    {" "}
                    Unstake
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <h1 className="text-white lg:text-2xl font-semibold">
            {" "}
            Please Connect your wallet{" "}
          </h1>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
