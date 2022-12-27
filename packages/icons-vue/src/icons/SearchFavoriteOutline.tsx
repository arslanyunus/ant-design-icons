// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchFavoriteOutlineSvg from '@ant-design/icons-svg/lib/asn/SearchFavoriteOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchFavoriteOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchFavoriteOutline: SearchFavoriteOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchFavoriteOutlineSvg}></AntdIcon>;
};

SearchFavoriteOutline.displayName = 'SearchFavoriteOutline';
SearchFavoriteOutline.inheritAttrs = false;
export default SearchFavoriteOutline;