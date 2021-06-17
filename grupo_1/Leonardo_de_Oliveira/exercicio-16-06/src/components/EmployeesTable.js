import '../bootstrap.min.css'
import employees from '../data/empresa2.json'

export function EmployeesTable() {

    function renderHead() {
        return (
            <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Departamento</th>
                <th>Salário</th>
            </tr>
            </thead>
        )
    }

    function renderBody() {
        const formatter = Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })

        let totalSalary = 0

        return (
            <tbody>
            {employees.map(employee => {
                totalSalary += employee.salario

                return (
                    <tr>
                        <td>{employee.id}</td>
                        <td>{employee.nome}</td>
                        <td>{employee.departamento}</td>
                        <td>{employee.salario}</td>
                    </tr>
                )
            })}

            <tr>
                <td colSpan="3">Total dos salários</td>
                <td>{formatter.format(totalSalary)}</td>
            </tr>

            <tr>
                <td colSpan="3">Média de salário</td>
                <td>{formatter.format(totalSalary / employees.length)}</td>
            </tr>
            </tbody>
        )
    }

    return (
        <div className="EmployeesTable">
            <table className="table table-bordered table-striped">
                {renderHead()}
                {renderBody()}
            </table>
        </div>
    )
}