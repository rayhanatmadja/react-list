import React from "react";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className="modal fade" id="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">Form Pegawai</div>
          <form onSubmit={this.SavePegawai}>
            <div className="modal-body">
              NIP
              <input
                type="number"
                name="nip"
                value={this.state.nip}
                onChange={this.bind}
                className="form-control"
                required
              />
              Nama
              <input
                type="text"
                name="nama"
                value={this.state.nama}
                onChange={this.bind}
                className="form-control"
                required
              />
              Alamat
              <input
                type="text"
                name="alamat"
                value={this.state.alamat}
                onChange={this.bind}
                className="form-control"
                required
              />
            </div>
            <div className="modal-footer">
              <button className="btn btn-sm btn-success" type="submit">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
