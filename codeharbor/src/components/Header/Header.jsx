import headerImage from "../../assets/header.png"

export const Header = () => {
    return (
        <>
        <header className="header">
            <div className="headerContainer">
                <img src={headerImage} alt="Logo" />

                <nav>
                    <a href="#sobre-nos">Sobre nós</a>
                    <a href="#contato">Contato</a>
                    <a href="#servicos">Serviços</a>
                </nav>
            </div>
        </header>
        </>
    )
}