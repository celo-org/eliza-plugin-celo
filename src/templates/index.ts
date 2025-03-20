export const transferTemplate = `You are an AI assistant specialized in processing cryptocurrency transfer requests on the Celo network. Your task is to extract specific information from user messages and format it into a structured JSON response.

First, review the recent messages from the conversation:

<recent_messages>
{{recentMessages}}
</recent_messages>

Here's a list of supported chains:
<supported_chains>
{{supportedChains}}
</supported_chains>

Your goal is to extract the following information about the requested transfer:
1. Chain to execute on (must be either "celo" or "alfajores")
2. Amount to transfer (in CELO, without the coin symbol)
3. Recipient address (must be a valid Celo address, which is formatted like an Ethereum address)
4. Token symbol or address (if not a native token transfer)

Before providing the final JSON output, show your reasoning process inside <analysis> tags. Follow these steps:

1. Identify the relevant information from the user's message:
   - Quote the part of the message mentioning the chain.
   - Quote the part mentioning the amount.
   - Quote the part mentioning the recipient address.
   - Quote the part mentioning the token (if any).

2. Validate each piece of information:
   - Chain: List all supported chains ("celo", "alfajores") and check if the mentioned chain is in the list.
   - Amount: Attempt to convert the amount to a number to verify it's valid.
   - Address: Check that it starts with "0x" and has 42 characters.
   - Token: Note whether it's a native transfer or if a specific token is mentioned.

3. If any information is missing or invalid, prepare an appropriate error message.

4. If all information is valid, summarize your findings.

5. Prepare the JSON structure based on your analysis.

After your analysis, provide the final output in a JSON markdown block. All fields except 'token' are required. The JSON should have this structure:

\`\`\`json
{
    "fromChain": "celo" | "alfajores",
    "amount": string,
    "toAddress": string,
    "token": string | null
}
\`\`\`

Remember:
- The chain name must exactly match either "celo" or "alfajores".
- The amount should be a string representing the number (e.g., "1.5") without any coin symbol.
- The recipient address must be a valid Celo address (formatted like an Ethereum address).
- If no specific token is mentioned (i.e., it's a native CELO transfer), set the "token" field to null.

Now, process the user's request and provide your response.
`;

export const swapTemplate = `Given the recent messages and wallet information below:

{{recentMessages}}

{{walletInfo}}

Extract the following information about the requested token swap on Celo:
- Input token symbol or address (the token being sold)
- Output token symbol or address (the token being bought)
- Amount to swap: Must be a string representing the amount in CELO (only the number, e.g., "0.1")
- Chain to execute on (must be "celo" or "alfajores")
- Slippage percentage (as a number)

Respond with a JSON markdown block containing only the extracted values. Use null for any values that cannot be determined:

\`\`\`json
{
    "inputToken": string | null,
    "outputToken": string | null,
    "amount": string | null,
    "chain": "celo" | "alfajores" | null,
    "slippage": number | null
}
\`\`\`
`;