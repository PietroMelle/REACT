function BotaoLogout ({isLogado}) {

    return (
        <div>
            <h2> Bem-vindo! </h2>
            {isLogado && <button>🚪 Logout </button>}        
        </div>
    )
}

export default BotaoLogout
