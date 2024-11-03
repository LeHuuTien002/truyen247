// services/theLoaiService.js
import axios from 'axios';

const fetchTheLoai = async (token) => {
    try {
        const response = await axios.get('http://localhost:8080/api/admin/theloais', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data; // Trả về dữ liệu nếu thành công
    } catch (error) {
        throw new Error('Có lỗi xảy ra khi tải dữ liệu!'); // Ném lỗi để xử lý ở component
    }
};

// Hàm tạo thể loại mới
const createTheLoai = async (tenTheLoai, mota, token) => {
    try {
        const response = await axios.post('http://localhost:8080/api/admin/theloais',
            {tenTheLoai, mota},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
        // Gọi hàm fetchTheLoai để làm mới danh sách
        const updatedList = await fetchTheLoai(token);
        return {success: response.data.body, updatedList};// Trả về kết quả thành công và danh sách mới
    } catch (error) {
        // Trả về lỗi nếu có
        if (error.response) {
            throw new Error(error.response.data.message);
        } else {
            throw new Error('Đã xảy ra lỗi không xác định.');
        }
    }
}

// Hàm cập nhật thể loại
const updateTheLoai = async (id, tenTheLoai, mota, token) => {
    try {
        const response = await axios.put(
            `http://localhost:8080/api/admin/theloais/${id}`,
            {tenTheLoai, mota},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        // Gọi hàm fetchTheLoai để làm mới danh sách
        const updatedList = await fetchTheLoai(token);
        return {success: response.data.body, updatedList}; // Trả về kết quả thành công và danh sách mới
    } catch (error) {
        // Trả về lỗi nếu có
        if (error.response) {
            throw new Error(error.response.data.message);
        } else {
            throw new Error('Đã xảy ra lỗi không xác định.');
        }
    }
};

const deleteTheLoai = async (id, token) => {
    try {
        const response = await axios.delete(`http://localhost:8080/api/admin/theloais/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        // Gọi hàm fetchTheLoai để làm mới danh sách
        const updatedList = await fetchTheLoai(token);
        return {success: response.data.body, updatedList}; // Trả về kết quả thành công và danh sách mới
    } catch (error) {
        throw new Error('Đã xảy ra lỗi không xác định.');
    }
}
export {fetchTheLoai, updateTheLoai, createTheLoai, deleteTheLoai};

