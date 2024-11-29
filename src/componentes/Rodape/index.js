import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
                        <img src="/imagens/facebook.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://x.com/home?lang=pt-br" rel="noreferrer" target="_blank">
                        <img src="/imagens/x.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" rel="noreferrer" target="_blank">
                        <img src="/imagens/instagram.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
    </footer>)
}

export default Rodape