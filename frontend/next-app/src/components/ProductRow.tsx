export function ProductRow({ product }) {
  return (
      <tr>
        <th scope="row">{product.id}</th>
        <td>{product.tipo_prodotto_id}</td>
        <td>{product.nome_oggetto}</td>
        <td>{product.descrizione}</td>
        <td>{product.created_at}</td>
        <td>{product.updated_at}</td>
        <td> <button type="button" className="btn btn-primary p-1"> Mostra azioni </button></td>
      </tr>
  );
}
