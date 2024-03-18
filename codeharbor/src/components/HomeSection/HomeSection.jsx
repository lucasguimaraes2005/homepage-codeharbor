import homeImage from '../../assets/homepag.png';

export const HomeSection = () => {
    return (
        <>
        <section className="homesection">
            <div>
                <h1>
                    Bem vindo ao seu porto seguro no desenvolvimento WEB.
                </h1>
                <p>
                    Confiáveis e solicitos ao seu pedido, com os preços mais acessíveis do mercado. <a href="https://discord.gg/yRd4UgMEwn">Clique aqui e conheça mais sobre a gente!</a>
                </p>
            </div>
            <img src={homeImage} alt="CodeHarbor" />
        </section>
        </>
    )
}
