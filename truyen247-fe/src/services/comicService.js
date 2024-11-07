// Hàm tạo truyện mới
import axios from "axios";

const createComic = async (name, otherName, status, content, author, activate, file, token) => {
    console.log({name, otherName, status, content, author, activate, file, token})
    try {
        const formData = new FormData();
        // Tạo đối tượng ComicRequest và chuyển thành Blob
        const comicRequest = {
            name: name,
            otherName: otherName,
            status: status,
            content: content,
            author: author,
            activate: activate,
        };
        formData.append("comicRequest", new Blob([JSON.stringify(comicRequest)], {type: "application/json"}));

        // Thêm file vào formData
        formData.append("file", file);
        const response = await axios.post('http://localhost:8080/api/admin/comics/create',
            formData,
            {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                }
            })
        // Gọi hàm fetchGenre để làm mới danh sách
        // const updatedList = await fetchGenre(token);
        return {
            success: response.data.body,
            // updatedList
        };// Trả về kết quả thành công và danh sách mới
    } catch (error) {
        // Trả về lỗi nếu có
        if (error.response) {
            throw new Error(error.response.data.message);
        } else {
            throw new Error('Đã xảy ra lỗi không xác định.');
        }
    }
}

export {createComic};