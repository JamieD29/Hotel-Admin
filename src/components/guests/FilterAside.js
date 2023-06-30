import { FilterList, FilterListItem } from 'react-admin';
import { Card, CardContent } from '@mui/material';
import CategoryIcon from '@mui/icons-material/LocalOffer';

export default function PostFilterSidebar() {
  return (
    <Card sx={{ order: -1, mr: 2, mt: 9, width: 200 }}>
      <CardContent>
        <FilterList label="Role" icon={<CategoryIcon />}>
          <FilterListItem label="Guest" value={{ role: 'guest' }} />
          <FilterListItem
            label="Invoice Manager"
            value={{ role: 'invoice manager' }}
            sx={{ width: 200 }}
          />
          <FilterListItem
            label="Room Manager"
            value={{ role: 'room manager' }}
          />
        </FilterList>
      </CardContent>
    </Card>
  );
}
