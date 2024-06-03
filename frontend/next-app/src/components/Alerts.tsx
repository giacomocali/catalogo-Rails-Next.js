export function ErrorAlert({body}) {
  return (
    <div className="alert alert-danger" role="alert">
      {body}
    </div>
  );
}

export function SuccessAlert({body}) {
  return (
    <div className="alert alert-success" role="alert">
      {body}
    </div>
  );
}
