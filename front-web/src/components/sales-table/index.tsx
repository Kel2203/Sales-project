import './styles.css';

function SalesTable() {
  return (
    <div className="sales-table-container base-card">
      <h3 className="sales-table-title">Vendas recentes</h3>
      <table className="sales-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Gênero</th>
            <th>Categoria</th>
            <th>Loja</th>
            <th>Forma de pagamento</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#264</td>
            <td>option</td>
            <td>option</td>
            <td>option</td>
            <td>option</td>
            <td>option</td>
            <td>option</td>
          </tr>
          <tr>
            <td>#264</td>
            <td>option</td>
            <td>option</td>
            <td>option</td>
            <td>option</td>
            <td>option</td>
            <td>option</td>
          </tr>
          <tr>
            <td>#264</td>
            <td>option</td>
            <td>option</td>
            <td>option</td>
            <td>option</td>
            <td>option</td>
            <td>option</td>
          </tr>
          <tr>
            <td>#264</td>
            <td>option</td>
            <td>option</td>
            <td>option</td>
            <td>option</td>
            <td>option</td>
            <td>option</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
