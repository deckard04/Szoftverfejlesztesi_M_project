package com.Soft_Dev_Project.SpringBootecommerceshoeshop.repository;

import com.Soft_Dev_Project.SpringBootecommerceshoeshop.entity.Available;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("http://localhost:4200")
public interface SizesRepository extends JpaRepository<Available, Long> {
    List<Available> findByProductId_Id(@Param("id") Long id);



}
