import React, { useEffect, useState } from "react";
import { drizzleReactHooks } from "@drizzle/react-plugin";

const { useDrizzle, useDrizzleState } = drizzleReactHooks;

const ButtonWalletConnect = () => {
    const state = useDrizzleState(state => state);

    const hiddenAccount = account => {
        return account[0] + account[1] + account[2] + account[3] + account[4] + "..." +
               account[account.length-6] + account[account.length-5] + account[account.length-4] + 
               account[account.length-3] + account[account.length-2] + account[account.length-1]
    }

    return (
        <a className="btn btn-custom font-weight-bold">
            Your wallet:
            {hiddenAccount(state.accounts[0])}
        </a>
    );
}

export default ButtonWalletConnect;