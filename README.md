# @elizaos/plugin-celo

A plugin for essential blockchain operations on the Celo network within the ElizaOS ecosystem.

## Description

This plugin provides comprehensive functionality for interacting with Celo blockchain, including token transfers and token swaps using LiFi and Bebop integrations.

## Features

- Celo mainnet and Alfajores testnet support
- Native CELO token transfers
- Token swapping via multiple aggregators (LiFi and Bebop)
- Wallet balance tracking and caching
- Custom RPC endpoint configuration

## Installation

### After merge on ElizaOS

Once this plugin is officially added to ElizaOS, you can install it using:

```bash
pnpm install @elizaos/plugin-celo
```

### Before merge on ElizaOS

To use this plugin before it's officially added to ElizaOS:

1. Clone the repository
   ```bash
   git clone https://github.com/Celo-Mexico/plugin-celo.git
   cd plugin-celo
   ```

2. Install dependencies and build
   ```bash
   pnpm install
   pnpm build
   ```

3. Copy the plugin to your ElizaOS agent
   ```bash
   cp -r ./ /path/to/your/eliza/agent/packages/plugins/plugin-celo
   ```

4. Add the plugin to your ElizaOS character configuration by modifying your character's config file:
   ```json
   {
     "plugins": [
       {
         "name": "plugin-celo",
         "path": "/path/to/your/eliza/agent/packages/plugins/plugin-celo"
       }
     ],
     "settings": {
       "EVM_PRIVATE_KEY": "your-private-key-here",
       "EVM_PROVIDER_URL": "https://your-custom-rpc-url" 
     }
   }
   ```

## Configuration

### Required Environment Variables

```bash
# Required
EVM_PRIVATE_KEY=your-private-key-here
EVM_PROVIDER_URL=https://your-custom-rpc-url

# Optional - Custom RPC URLs
CELO_PROVIDER_URL=https://forno.celo.org
ALFAJORES_PROVIDER_URL=https://alfajores-forno.celo-testnet.org

```

### Chain Configuration

By default, the plugin supports:
- `celo` (Celo mainnet)
- `alfajores` (Celo testnet)

## Providers

### Wallet Provider

The Wallet Provider initializes with Celo mainnet as the default chain. It:

- Provides the context of the currently connected address and its balance
- Creates Public and Wallet clients to interact with the supported chains
- Handles chain switching
- Manages caching for wallet balances

## Actions

### 1. Transfer

Transfer CELO on the Celo network:

```
// Example: Transfer 1 CELO
Transfer 1 CELO to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e
```

### 2. Swap

Swap tokens on the Celo network using multiple aggregators (LiFi and Bebop):

```
// Example: Swap CELO for cUSD
Swap 1 CELO for cUSD on Celo
```

## API Reference

### Core Components

**WalletProvider**
- Manages wallet connections
- Handles chain switching
- Manages RPC endpoints
- Tracks balances

**Actions**
- `TransferAction`: Native CELO transfers
- `SwapAction`: Token swapping via LiFi and Bebop

## Contributing

Contributions are welcome! Please make sure to check out the contribution guidelines.

## Credits

This plugin integrates with and builds upon several key technologies:

- [Celo](https://celo.org/): Mobile-first blockchain platform
- [LiFi](https://li.fi/): DEX aggregator for swaps
- [Bebop](https://bebop.xyz/): DEX aggregator for swaps
- [viem](https://viem.sh/): TypeScript interface for Ethereum
- [ElizaOS](https://elizaos.com/): Agent operating system

For more information:

- [Celo Documentation](https://docs.celo.org/)
- [LiFi Documentation](https://docs.li.fi/)
- [viem Documentation](https://viem.sh/docs/getting-started.html)

---

Made with 💜 by [Psy Labs](https://psylabs.io) | [@psylabs_io](https://twitter.com/psylabs_io)
