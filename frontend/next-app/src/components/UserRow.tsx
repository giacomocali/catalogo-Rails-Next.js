export function UserRow({id, nome, cognome, username, data_nascita}){
    return <>
        <tr>
            <th scope="row">{id}</th>
            <td>{nome ? nome : "N/A"}</td>
            <td>{cognome ? cognome : "N/A"}</td>
            <td>{username ? username : "N/A"}</td>
            <td> {data_nascita ? data_nascita : "N/A"} </td>
        </tr>
    </>
}