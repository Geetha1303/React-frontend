import axios from 'axios';


const url = process.env.REACT_APP_API_URL; //backend service name

class EmployeeService {

    getEmployees(){
        return axios.get(url);
    }

    createEmployee(employee){
        return axios.post(url, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(url + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(url + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(url + '/' + employeeId);
    }
}

export default new EmployeeService()