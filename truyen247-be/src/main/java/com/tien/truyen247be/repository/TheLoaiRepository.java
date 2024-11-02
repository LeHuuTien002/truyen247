package com.tien.truyen247be.repository;

import com.tien.truyen247be.models.TheLoai;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TheLoaiRepository extends JpaRepository<TheLoai, Long> {
    Boolean existsByTenTheLoai(String tenTheloai);
}
