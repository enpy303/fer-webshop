package hr.fer.webshop2.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import hr.fer.webshop2.domain.entity.ProductType;

@Service
@Transactional
public class ProductTypeService extends JpaService<ProductType> {
}
