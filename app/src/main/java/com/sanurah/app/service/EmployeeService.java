package com.sanurah.app.service;

import com.sanurah.app.dao.Employee;
import com.sanurah.app.dto.EmployeeModel;
import com.sanurah.app.repository.EmployeeRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

    private EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public EmployeeModel createEmployee(EmployeeModel employeeModel) {
        Employee employee = map(employeeModel);
        employee = employeeRepository.save(employee);
        return map(employee);
    }

    public EmployeeModel getEmployee(Long id) {
        Optional<Employee> employee = employeeRepository.findById(id);
        return employee.isPresent() ? map(employee.get()) : null;
    }


    public Employee map(EmployeeModel employeeModel) {
        Employee employee = new Employee();
        employee.setId(employeeModel.getId());
        employee.setFirstName(employeeModel.getFirstName());
        return employee;
    }

    public EmployeeModel map(Employee employee) {
        EmployeeModel employeeModel = new EmployeeModel();
        employeeModel.setId(employee.getId());
        employeeModel.setFirstName(employee.getFirstName());
        return employeeModel;
    }
}
