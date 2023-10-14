import web3 from "../hooks/useWeb3";

let contract = new web3.eth.Contract(
  abi,
  process.env.NEXT_PUBLIC_DEPLOYED_ADDRESS
);

export const initializeStake = async (price, account) => {
  await contract.methods
    .stake()
    .send({ from: account })
    .once("transactionHash", () => {
      setTxLoading(true);
    })
    .once("receipt", () => {
      setTxLoading(false);
      toast.success("Initialized succesfully");
    })
    .on("error", () => {
      setTxLoading(false);
      toast.error("Initialized failed");
    });
};

export const checkIfUserIsEligible = async () => {
  await contract.methods
}
