// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchFavoriteBrokenSvg from '@ant-design/icons-svg/lib/asn/SearchFavoriteBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchFavoriteBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchFavoriteBroken: SearchFavoriteBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchFavoriteBrokenSvg}></AntdIcon>;
};

SearchFavoriteBroken.displayName = 'SearchFavoriteBroken';
SearchFavoriteBroken.inheritAttrs = false;
export default SearchFavoriteBroken;