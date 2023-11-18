package com.Soft_Dev_Project.SpringBootecommerceshoeshop.Home;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


public class HomeController {

    public String homePage(){
        return "index.html";
    }
}
