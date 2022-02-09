use anchor_lang::prelude::*;
use anchor_lang::prelude::borsh::maybestd::collections::BTreeMap;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod solana_private_sale {
    use super::*;
    pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
        Ok(())
    }
}

#[account]
#[derive(Default)]
pub struct PrivateSale {
    whitelist: BTreeMap<Pubkey, WhitelistInfo>,
}

#[account]
#[derive(Default)]
pub struct WhitelistInfo {
    role: Role,
    ref_key: Pubkey,
    extra_key: [Pubkey;5],
}

#[derive(
AnchorSerialize,
AnchorDeserialize,
Copy,
Clone,
PartialEq,
Eq
)]
pub enum Role {
    CoreTeam,
    PrivateSale,
    None
}

impl Default for Role {
    fn default() -> Self { Role::None }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    pub acc: Account<'info, PrivateSale>
}