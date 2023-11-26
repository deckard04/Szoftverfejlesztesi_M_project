package com.Soft_Dev_Project.SpringBootecommerceshoeshop.service;

import com.Soft_Dev_Project.SpringBootecommerceshoeshop.dto.PurchaseDto;
import com.Soft_Dev_Project.SpringBootecommerceshoeshop.dto.PurchaseResponse;
import com.Soft_Dev_Project.SpringBootecommerceshoeshop.entity.Customer;
import com.Soft_Dev_Project.SpringBootecommerceshoeshop.entity.Order;
import com.Soft_Dev_Project.SpringBootecommerceshoeshop.entity.OrderItem;
import com.Soft_Dev_Project.SpringBootecommerceshoeshop.repository.CustomerRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.UUID;

@Service
public class CheckoutServiceImplementation implements CheckoutService{

        private CustomerRepository customerRepository;

        @Autowired
        public CheckoutServiceImplementation(CustomerRepository customerRepository){
                this.customerRepository = customerRepository;
        }

        @Override
        @Transactional
        public PurchaseResponse placeOrder(PurchaseDto purchaseDto) {
                Order order = purchaseDto.getOrder();

                String trackingNumber = generateTrackingNumber();
                order.setOrderTrackingNumber(trackingNumber);

                Set<OrderItem> orderItems = purchaseDto.getOrderItems();
                orderItems.forEach(item -> order.add(item));

                order.setAddress(purchaseDto.getAddress());

                Customer customer = purchaseDto.getCustomer();
                customer.add(order);

                customerRepository.save(customer);


                return new PurchaseResponse(trackingNumber);
        }

        private String generateTrackingNumber() {
                //Random UUID
                return UUID.randomUUID().toString();
        }
}
