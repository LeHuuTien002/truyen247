import React from 'react';

const DeleteModal = ({ theloaiId, handleDelete }) => {
    return (
        <div className="modal fade" id={`deleteModal-${theloaiId}`} data-bs-backdrop="static"
             data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteModalLabel">Thông báo</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Bạn có muốn xóa thể loại truyện này không?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-warning" data-bs-dismiss="modal">No</button>
                        <button onClick={() => handleDelete(theloaiId)} type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
