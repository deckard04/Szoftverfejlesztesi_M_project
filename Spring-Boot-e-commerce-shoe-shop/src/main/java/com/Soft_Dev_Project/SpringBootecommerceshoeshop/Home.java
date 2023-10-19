package com.Soft_Dev_Project.SpringBootecommerceshoeshop;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class Home {

    @GetMapping("/")
    public String homePage(){
        return "index.html";
    }
}
