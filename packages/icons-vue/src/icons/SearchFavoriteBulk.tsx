// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchFavoriteBulkSvg from '@ant-design/icons-svg/lib/asn/SearchFavoriteBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchFavoriteBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchFavoriteBulk: SearchFavoriteBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchFavoriteBulkSvg}></AntdIcon>;
};

SearchFavoriteBulk.displayName = 'SearchFavoriteBulk';
SearchFavoriteBulk.inheritAttrs = false;
export default SearchFavoriteBulk;