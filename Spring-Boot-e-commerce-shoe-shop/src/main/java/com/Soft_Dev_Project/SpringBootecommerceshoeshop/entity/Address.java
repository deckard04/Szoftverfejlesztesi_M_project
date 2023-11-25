package com.Soft_Dev_Project.SpringBootecommerceshoeshop.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "address")
@Getter
@Setter
@ToString
public class Address {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id")
        private Long id;

        @Column(name = "street")
        private String street;

        @Column(name = "city")
        private String city;

        @Column(name = "region")
        private String region;

        @Column(name = "zipcode")
        private String zipcode;

        @OneToOne
        @PrimaryKeyJoinColumn
        private Order order;



}
