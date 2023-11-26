package com.Soft_Dev_Project.SpringBootecommerceshoeshop.repository;

import com.Soft_Dev_Project.SpringBootecommerceshoeshop.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

}