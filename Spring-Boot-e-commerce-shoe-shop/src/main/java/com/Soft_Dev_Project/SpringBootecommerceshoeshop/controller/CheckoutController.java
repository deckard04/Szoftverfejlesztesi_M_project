package com.Soft_Dev_Project.SpringBootecommerceshoeshop.controller;

import com.Soft_Dev_Project.SpringBootecommerceshoeshop.dto.PurchaseDto;
import com.Soft_Dev_Project.SpringBootecommerceshoeshop.dto.PurchaseResponse;
import com.Soft_Dev_Project.SpringBootecommerceshoeshop.service.CheckoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {

        private CheckoutService checkoutService;

        @Autowired
        public CheckoutController(CheckoutService checkoutService) {
                this.checkoutService = checkoutService;
        }

        @PostMapping("/purchase")
        public PurchaseResponse placeOrder(@RequestBody PurchaseDto purchaseDto){
                PurchaseResponse purchaseResponse = checkoutService.placeOrder(purchaseDto);
                return purchaseResponse;
        }
}
