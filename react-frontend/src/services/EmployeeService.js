import axios from 'axios';
//var backend_url=<@backend_url@>
//const EMPLOYEE_API_BASE_URL = "http://3.234.141.206:8080/api/v1/employees";
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";
//const EMPLOYEE_API_BASE_URL = ${backend_url:"http://localhost:8080/api/v1/employees"};

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService()