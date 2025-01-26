import "./Shop.css"
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Error from "../components/Error";

export default function Shop() {
    const [items, setItems] = useState<ShopItem[]>([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchShopItems() {
            try {
                const res = await fetch('http://localhost:3000/shop/json');
                const shopItems = await res.json() as ShopResponse;
                if (shopItems.status === 200) {
                    setItems(shopItems.data);
                } else {
                    setError(true);
                }
            } catch {
                setError(true);
            }
        }
        fetchShopItems();
    }, [])

    function handleClick(event: React.SyntheticEvent<HTMLDivElement>) {
        const btn = event.currentTarget;
        const itemId = btn.dataset.itemId;
        navigator.clipboard.writeText(`-shop buy ${itemId}`);
        btn.innerHTML = "<p>Command Copied!</p>"
        setTimeout(() => {
            btn.innerHTML = "<p>Buy</p>";
        }, 500);
    }

    function Catalogue() {
        return (
            <div className="catalogue">
                {items.map((item) => {
                    return (
                        <div className="container" key={item.id}>
                            <div className="img-wrapper">
                                <img src={item.src} alt={item.name} referrerPolicy="no-referrer" />
                            </div>
                            <div className="name">
                                <p>{item.name} - {item.cost} 🍪</p>
                            </div>
                            <div className="buy-btn" onClick={(event) => handleClick(event)} data-item-id={item.id}>
                                <p>{"Buy"}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }

    return (
        <>
            <Header page="shop" />
            <div className="shop">
                <h1>Backgrounds</h1>
                {error ? <Error details="Could not load backgrounds" /> : <Catalogue />}
            </div>
        </>
    )
}

export type ShopItem = {
    id: string;
    name: string;
    cost: number;
    src: string;
    type: string;
    ts: number;
}

export type ShopResponse = {
    status: number,
    message: string,
    data: ShopItem[]
} 