"use client"

export function YesNoModal() {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Lancia la demo del modale
      </button>
      <div
        className="modal fade"
        role="dialog"
        id="exampleModal"
        aria-labelledby="exampleModalTitle"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title h5 " id="exampleModalTitle">
                Intestazione modale
              </h2>
            </div>
            <div className="modal-body">
              <p>Font Titillium 16px. Leading 24px. omnis iste natus error.</p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary btn-sm"
                data-bs-dismiss="modal"
                type="button"
              >
                Chiudi modale
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
