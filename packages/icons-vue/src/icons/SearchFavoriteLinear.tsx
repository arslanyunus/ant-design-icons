// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchFavoriteLinearSvg from '@ant-design/icons-svg/lib/asn/SearchFavoriteLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchFavoriteLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchFavoriteLinear: SearchFavoriteLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchFavoriteLinearSvg}></AntdIcon>;
};

SearchFavoriteLinear.displayName = 'SearchFavoriteLinear';
SearchFavoriteLinear.inheritAttrs = false;
export default SearchFavoriteLinear;