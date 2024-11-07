package com.tien.truyen247be.payload.request;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ChapterRequest {
    private String title;
    private int chapterNumber;
}
