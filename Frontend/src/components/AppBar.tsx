import { FC } from "react";
import dynamic from "next/dynamic";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const AppBar: FC = () => {
    const WalletMultiButton = dynamic(
        async () =>
            (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
        { ssr: false }
    );
    
    return (
        <div className="flex w-full justify-end">
            <WalletMultiButton />
        </div>
    );
};
