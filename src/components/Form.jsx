import '../styles/form.scss'

export function Form() {
    return (
        <div className="container">
            <h1>Consultar repositório</h1>
            <form action="">
                <label htmlFor="user">
                    <select name="type" id="type">
                        <option value="users">Usuário</option>
                        <option value="orgs">Organização</option>
                    </select>
                    <input type="user" id="user" name="user" />
                </label>
            </form>
            <button type="button">Consultar</button>
        </div>
    )
}