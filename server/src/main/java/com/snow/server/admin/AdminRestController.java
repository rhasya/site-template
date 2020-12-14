package com.snow.server.admin;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminRestController {

    @GetMapping("/check")
    public Map<String, String> check() {
        HashMap<String, String> res = new HashMap<>();
        res.put("username", "admin");
        return res;
    }

    @GetMapping("/api/needauth")
    public String needAuth() {
        return "You are in.";
    }
}