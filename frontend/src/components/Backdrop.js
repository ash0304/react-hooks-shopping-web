import './Backdrop.scss';

const Backdrop = ({ show, backdropClick }) => {
  return (
    show && <div className="backdrop" onClick={backdropClick}></div>
  );
};

export default Backdrop;
