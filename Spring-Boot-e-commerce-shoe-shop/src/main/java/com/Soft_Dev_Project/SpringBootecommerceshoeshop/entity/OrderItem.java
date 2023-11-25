package com.Soft_Dev_Project.SpringBootecommerceshoeshop.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "orderitem")
@Getter
@Setter
@ToString
public class OrderItem {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id")
        private Long id;

        private Long product_id;

        private int quantity;

        private int part_price;

        private int size;

        @ManyToOne
        @JoinColumn(name = "order_id")
        private Order order;

}
