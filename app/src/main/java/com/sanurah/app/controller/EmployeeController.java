package com.sanurah.app.controller;

import com.sanurah.app.dto.EmployeeModel;
import com.sanurah.app.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/employee")
public class EmployeeController {

    private EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/{id}")
    public EmployeeModel getEmployeeById(@PathVariable Long id) {
        return employeeService.getEmployee(id);
    }

    @PutMapping
    public EmployeeModel createEmployee(@RequestBody EmployeeModel employeeModel) {
        return employeeService.createEmployee(employeeModel);
    }
}
