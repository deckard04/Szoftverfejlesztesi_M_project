package com.Soft_Dev_Project.SpringBootecommerceshoeshop.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "product")
@Getter
@Setter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name = "brand")
    private String brand;

    @Column(name = "model")
    private String model;

    @Column(name = "color")
    private String color;

    @Column(name = "release_date")
    private Date releaseDate;

    @Column(name = "price")
    private int price;

    @Column(name = "description")
    private String description;

    @Column(name = "product_image")
    private String imgUrl;

    @OneToMany(mappedBy = "productId")
    private List<Available> sizes;
}
