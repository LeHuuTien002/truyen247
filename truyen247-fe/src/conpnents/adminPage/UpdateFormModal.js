import React from 'react';

const UpdateModal = ({ theloai, handleSubmit }) => {
    return (
        <div className="modal fade" id={`updateModal-${theloai.id}`} data-bs-backdrop="static"
             data-bs-keyboard="false" tabIndex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="updateModalLabel">Cập nhật thể loại truyện</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={(e) => handleSubmit(e, theloai.id)}>
                            <div className="mb-3 mt-3">
                                <label htmlFor="storyGenreName">Tên thể loại:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="storyGenreName"
                                    placeholder="Nhập tên thể loại truyện"
                                    name="storyGenreName"
                                    defaultValue={theloai.tenTheLoai}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Mô tả: </label>
                                <textarea
                                    required
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    defaultValue={theloai.mota}
                                    rows="10">
                                </textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-warning form-control mb-3">
                                Cập nhật
                            </button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;
