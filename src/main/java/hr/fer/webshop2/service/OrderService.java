package hr.fer.webshop2.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import hr.fer.webshop2.domain.entity.Order;

@Service
@Transactional
public class OrderService extends JpaService<Order> {
}
