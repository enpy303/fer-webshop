package hr.fer.webshop2.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hr.fer.webshop2.domain.entity.OrderState;

@Repository
public interface OrderStateRepository extends JpaRepository<OrderState, Long> {
}
