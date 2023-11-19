package com.Soft_Dev_Project.SpringBootecommerceshoeshop.repository;

import com.Soft_Dev_Project.SpringBootecommerceshoeshop.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;


@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByBrand(@Param("id") String id);

    List<Product> findByModelContaining(@Param("name") String name);



}