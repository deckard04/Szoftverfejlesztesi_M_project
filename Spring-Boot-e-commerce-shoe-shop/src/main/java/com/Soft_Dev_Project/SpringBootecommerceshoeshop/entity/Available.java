package com.Soft_Dev_Project.SpringBootecommerceshoeshop.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "product_available")
@Getter
@Setter
@NoArgsConstructor
public class Available {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product productId ;

    private int size;

    private int is_in_stock;
}
