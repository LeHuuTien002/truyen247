package com.tien.truyen247be.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "theloais")
public class TheLoai {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "tenTheLoai", nullable = false)
    private String tenTheLoai;

    @Column(name = "mota", nullable = false, columnDefinition = "TEXT")
    private String mota;

    @Column(name = "ngaytao", nullable = false, updatable = false)
    private LocalDateTime ngaytao;

    @Column(name = "ngaycapnhat")
    private LocalDateTime ngaycapnhat;

    // Phương thức này sẽ chạy trước khi một bản ghi mới được lưu vào cơ sở dữ liệu
    @PrePersist
    protected void ngaytao() {
        this.ngaytao = LocalDateTime.now(); // Lấy thời gian hiện tại khi tạo mới bản ghi
    }

    // Phương thức này sẽ chạy trước mỗi lần cập nhật bản ghi
    @PreUpdate
    protected void ngaycapnhat() {
        this.ngaycapnhat = LocalDateTime.now(); // Cập nhật thời gian mỗi khi bản ghi được cập nhật
    }
}
