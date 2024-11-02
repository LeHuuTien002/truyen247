package com.tien.truyen247be.payload.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class TheLoaiResponse {
    private Long id;
    private String tenTheLoai;
    private String mota;
    private LocalDateTime ngaytao;
    private LocalDateTime ngaycapnhat;
}
