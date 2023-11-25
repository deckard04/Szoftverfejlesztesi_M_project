package com.Soft_Dev_Project.SpringBootecommerceshoeshop.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "user")
@Getter
@Setter
public class Customer {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id")
        private Long id;

        @Column(name = "first_name")
        private String first_name;

        @Column(name = "last_name")
        private String last_name;

        @Column(name = "email")
        private String email;

        @Column(name = "phone")
        private String phone;

        @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
        private Set<Order> orders = new HashSet<>();

        public void add(Order order){
                if (order != null) {
                        if (orders == null) {
                                orders = new HashSet<>();
                        }
                        orders.add(order);
                        order.setCustomer(this);
                }
        }
}
