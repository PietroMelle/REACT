function MensagemLogin(props) {
    if (props.isLogado) {
        return <h2>🎉 Bem-vindo de volta! </h2>
    } else {
        return <button> 🔑 Fazer login </button>
    }
}

export default MensagemLogin;