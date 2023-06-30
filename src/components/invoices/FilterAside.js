import { FilterList, FilterListItem } from 'react-admin';
import { Card, CardContent } from '@mui/material';
import CategoryIcon from '@mui/icons-material/LocalOffer';

export default function InvoiceFilterSidebar() {
  return (
    <Card sx={{ order: -1, mr: 2, mt: 9, width: 200 }}>
      <CardContent>
        <FilterList label="Status" icon={<CategoryIcon />}>
          <FilterListItem label="Confirmed" value={{ status: 'confirmed' }} />
          <FilterListItem
            label="Unconfirmed"
            value={{ status: 'unconfirmed' }}
          />
        </FilterList>
      </CardContent>
    </Card>
  );
}
