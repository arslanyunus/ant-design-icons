// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchFavorite1BulkSvg from '@ant-design/icons-svg/lib/asn/SearchFavorite1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchFavorite1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchFavorite1Bulk: SearchFavorite1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchFavorite1BulkSvg}></AntdIcon>;
};

SearchFavorite1Bulk.displayName = 'SearchFavorite1Bulk';
SearchFavorite1Bulk.inheritAttrs = false;
export default SearchFavorite1Bulk;