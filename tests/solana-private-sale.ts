import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { SolanaPrivateSale } from '../target/types/solana_private_sale';

describe('solana-private-sale', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.SolanaPrivateSale as Program<SolanaPrivateSale>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
