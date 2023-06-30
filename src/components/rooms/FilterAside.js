import { FilterList, FilterListItem } from 'react-admin';
import { Card, CardContent } from '@mui/material';
import CategoryIcon from '@mui/icons-material/LocalOffer';

export default function RoomFilterSidebar() {
  return (
    <Card sx={{ order: -1, mr: 2, mt: 9, width: 200 }}>
      <CardContent>
        <FilterList label="Type" icon={<CategoryIcon />}>
          <FilterListItem label="Normal Room" value={{ type: 'normal' }} />
          <FilterListItem label="VIP Room" value={{ type: 'vip' }} />
        </FilterList>
      </CardContent>
    </Card>
  );
}
