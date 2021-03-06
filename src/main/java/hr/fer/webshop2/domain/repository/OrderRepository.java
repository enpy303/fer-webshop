package hr.fer.webshop2.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hr.fer.webshop2.domain.entity.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
}
