import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { SolanaPrivateSale } from '../target/types/solana_private_sale';

describe('solana-private-sale', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.SolanaPrivateSale as Program<SolanaPrivateSale>;

  it('Is initialized!', async () => {
    const accKeyPair = anchor.web3.Keypair.generate();
    const user1 = anchor.web3.Keypair.generate();
    const owner = program.provider.wallet;
    await program.rpc.initialize({accounts:{acc: accKeyPair.publicKey}, signers: [accKeyPair]});
    const state = await program.account.privateSale.fetch(accKeyPair.publicKey);
    console.log('state: ', state)
  });
});
