package com.Soft_Dev_Project.SpringBootecommerceshoeshop.service;

import com.Soft_Dev_Project.SpringBootecommerceshoeshop.dto.PurchaseDto;
import com.Soft_Dev_Project.SpringBootecommerceshoeshop.dto.PurchaseResponse;

public interface CheckoutService {

        PurchaseResponse placeOrder(PurchaseDto purchaseDto);
}
