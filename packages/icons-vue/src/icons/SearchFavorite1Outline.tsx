// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchFavorite1OutlineSvg from '@ant-design/icons-svg/lib/asn/SearchFavorite1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchFavorite1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchFavorite1Outline: SearchFavorite1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchFavorite1OutlineSvg}></AntdIcon>;
};

SearchFavorite1Outline.displayName = 'SearchFavorite1Outline';
SearchFavorite1Outline.inheritAttrs = false;
export default SearchFavorite1Outline;