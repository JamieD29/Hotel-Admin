import { Link } from 'react-router-dom';
import CreateInvoice from './CreateInvoice';
// import EditInvoice from './EditInvoice';
import ListInvoice from './ListInvoice';
import ShowInvoice from './ShowInvoice';

const resource = {
  list: ListInvoice,
  create() {
    return <Link to="/payment">{CreateInvoice}</Link>;
  },
  // edit: EditInvoice,
  show: ShowInvoice,
};

export default resource;
