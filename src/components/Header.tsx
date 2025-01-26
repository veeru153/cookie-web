import './Header.css'

export default function Header({ page }: HeaderProps) {

    const highlightWhenActive = (page: string, key: string) => page === key ? 'active' : '';

    return (
        <>
            <div className="header-wrapper">
                <div className="header">
                    <div className="logo">
                        {/* <img src="/assets/logo.webp" alt="Yuqi's Cookie House"> */}
                        <p>Yuqi's Cookie House 🍪</p>
                    </div>
                    <div className="nav">
                        <div className={highlightWhenActive(page, 'home')}>
                            <a href="/">
                                <p>Home</p>
                            </a>
                        </div>
                        <div className={highlightWhenActive(page, 'shop')}>
                            <a href="/shop">
                                <p>Shop</p>
                            </a>
                        </div>
                        <div className={highlightWhenActive(page, 'info')}>
                            <a href="/info">
                                <p>Info</p>
                            </a>
                        </div>
                        <div>
                            <a href="https://discord.gg/DkWhBCv" target="_blank">
                                <p>Discord</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export type HeaderProps = {
    page: string;
}