import Table from 'react-bootstrap/Table';

const Listado = ({ colaboradores }) => {
  return (
    <>
      <Table responsive striped bordered>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Age</th>
            <th>Position</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
        {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Listado;
