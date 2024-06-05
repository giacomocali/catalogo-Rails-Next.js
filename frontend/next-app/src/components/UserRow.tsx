export function UserRow({ user }){
    return <>
        <tr>
            <th scope="row">{user.id}</th>
            <td>{user.nome}</td>
            <td>{user.cognome}</td>
            <td>{user.username}</td>
            <td> {user.data_nascita} </td>
        </tr>
    </>
}