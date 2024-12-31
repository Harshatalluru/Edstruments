import PropTypes from "prop-types";
import UploadInvoice from "./upload-invoice";
import InvoiceForm from "./invoice-form";
const InvoiceDetails = ({ logOut }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <UploadInvoice />
      {/* <button onClick={logOut}>Logout</button> */}
      <div className="w-[884px] h-screen overflow-y-auto w-fit">
        <InvoiceForm />
      </div>
   
    </div>
  );
};

export default InvoiceDetails;
InvoiceDetails.propTypes = {
  logOut: PropTypes.func.isRequired,
};
