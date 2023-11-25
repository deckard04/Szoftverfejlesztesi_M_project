package com.Soft_Dev_Project.SpringBootecommerceshoeshop.dto;

import com.Soft_Dev_Project.SpringBootecommerceshoeshop.entity.Address;
import com.Soft_Dev_Project.SpringBootecommerceshoeshop.entity.Customer;
import com.Soft_Dev_Project.SpringBootecommerceshoeshop.entity.Order;
import com.Soft_Dev_Project.SpringBootecommerceshoeshop.entity.OrderItem;
import lombok.Data;
import lombok.ToString;

import java.util.Set;

@Data
@ToString
public class PurchaseDto {

        private Customer customer;
        private Address address;
        private Order order;
        private Set<OrderItem> orderItems;
}
