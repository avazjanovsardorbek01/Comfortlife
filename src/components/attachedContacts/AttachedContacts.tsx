function AttachedContacts() {
  return (
    <div
      className="m-sm-2 position-fixed top-50 start-0 translate-middle-y"
      style={{
        zIndex: "999",
      }}
    >
      <ul
        className="d-flex gap-1 gap-md-2 flex-column list-unstyled social-custom"
        style={{ flexDirection: "column" }}
      >
        <li className="list-inline-item">
          <a href={import.meta.env.VITE_YOU_TUBE_URL} target="_blank">
            <span className="bi-youtube"></span>
            <span className="link-label">You Tube</span>
          </a>
        </li>
        <li className="list-inline-item">
          <a href={import.meta.env.VITE_FACEBOOK_URL} target="_blank">
            <span className="bi-facebook"></span>
            <span className="link-label">Facebook</span>
          </a>
        </li>
        <li className="list-inline-item">
          <a href={import.meta.env.VITE_INSTAGRAM_URL} target="_blank">
            <span className="bi-instagram"></span>
            <span className="link-label">Instagram</span>
          </a>
        </li>
        <li className="list-inline-item">
          <a href={import.meta.env.VITE_TELEGRAM_URL} target="_blank">
            <span className="bi-telegram"></span>
            <span className="link-label">Telegram</span>
          </a>
        </li>
        <li className="list-inline-item">
          <a href={`mailto:${import.meta.env.VITE_EMAIL_URL}`} target="_blank">
            <span className="bi-envelope"></span>
            <span className="link-label">Email</span>
          </a>
        </li>
        <li className="list-inline-item">
          <a href={`tel:${import.meta.env.VITE_TELEFON_URL}`}>
            <span className="bi-phone"></span>
            <span className="link-label">Telefon</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default AttachedContacts;
