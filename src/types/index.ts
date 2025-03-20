import type { Route, Token } from "@lifi/types";
import type {
    Account,
    Address,
    Chain,
    Hash,
    HttpTransport,
    PublicClient,
    WalletClient,
    Log,
} from "viem";

export type SupportedChain = "celo" | "alfajores";

// Transaction types
export interface Transaction {
    hash: Hash;
    from: Address;
    to: Address;
    value: bigint;
    data?: `0x${string}`;
    chainId?: number;
    logs?: Log[];
}

// Token types
export interface TokenWithBalance {
    token: Token;
    balance: bigint;
    formattedBalance: string;
    priceUSD: string;
    valueUSD: string;
}

export interface WalletBalance {
    chain: SupportedChain;
    address: Address;
    totalValueUSD: string;
    tokens: TokenWithBalance[];
}

// Chain configuration
export interface ChainMetadata {
    chainId: number;
    name: string;
    chain: Chain;
    rpcUrl: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    blockExplorerUrl: string;
}

export interface ChainConfig {
    chain: Chain;
    publicClient: PublicClient<HttpTransport, Chain, Account | undefined>;
    walletClient?: WalletClient;
}

// Action parameters
export interface TransferParams {
    fromChain: SupportedChain;
    toAddress: Address;
    amount: string;
    data?: `0x${string}`;
}

export interface SwapParams {
    chain: SupportedChain;
    fromToken: Address;
    toToken: Address;
    amount: string;
    slippage?: number;
}

export interface BebopRoute {
    data: string;
    approvalTarget: Address;
    sellAmount: string;
    from: Address;
    to: Address;
    value: string;
    gas: string;
    gasPrice: string;
}

export interface SwapQuote {
    aggregator: "lifi" | "bebop";
    minOutputAmount: string;
    swapData: Route | BebopRoute;
}

export interface BridgeParams {
    fromChain: SupportedChain;
    toChain: SupportedChain;
    fromToken: Address;
    toToken: Address;
    amount: string;
    toAddress?: Address;
}

// Plugin configuration
export interface CeloPluginConfig {
    rpcUrl?: {
        celo?: string;
        alfajores?: string;
    };
    secrets?: {
        EVM_PRIVATE_KEY: string;
    };
    testMode?: boolean;
    multicall?: {
        batchSize?: number;
        wait?: number;
    };
}

// LiFi types
export type LiFiStatus = {
    status: "PENDING" | "DONE" | "FAILED";
    substatus?: string;
    error?: Error;
};

export type LiFiRoute = {
    transactionHash: Hash;
    transactionData: `0x${string}`;
    toAddress: Address;
    status: LiFiStatus;
};

// Provider types
export interface TokenData extends Token {
    symbol: string;
    decimals: number;
    address: Address;
    name: string;
    logoURI?: string;
    chainId: number;
}

export interface TokenPriceResponse {
    priceUSD: string;
    token: TokenData;
}

export interface TokenListResponse {
    tokens: TokenData[];
}

export interface ProviderError extends Error {
    code?: number;
    data?: unknown;
}

export enum VoteType {
    AGAINST = 0,
    FOR = 1,
    ABSTAIN = 2,
}

export interface Proposal {
    targets: Address[];
    values: bigint[];
    calldatas: `0x${string}`[];
    description: string;
}

export interface VoteParams {
    chain: SupportedChain;
    governor: Address;
    proposalId: string;
    support: VoteType;
}

export interface QueueProposalParams extends Proposal {
    chain: SupportedChain;
    governor: Address;
}

export interface ExecuteProposalParams extends Proposal {
    chain: SupportedChain;
    governor: Address;
    proposalId: string;
}

export interface ProposeProposalParams extends Proposal {
    chain: SupportedChain;
    governor: Address;
}
