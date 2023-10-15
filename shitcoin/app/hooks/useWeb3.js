import Web3 from 'web3';

const useWeb3 = () => {
  const web3 = new Web3(process.env.NEXT_PUBLIC_QUICKNODE_URI)
  return web3
}

export default useWeb3;