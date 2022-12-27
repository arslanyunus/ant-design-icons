// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchFavorite1BoldSvg from '@ant-design/icons-svg/lib/asn/SearchFavorite1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchFavorite1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchFavorite1Bold: SearchFavorite1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchFavorite1BoldSvg}></AntdIcon>;
};

SearchFavorite1Bold.displayName = 'SearchFavorite1Bold';
SearchFavorite1Bold.inheritAttrs = false;
export default SearchFavorite1Bold;