// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchFavorite1LinearSvg from '@ant-design/icons-svg/lib/asn/SearchFavorite1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchFavorite1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchFavorite1Linear: SearchFavorite1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchFavorite1LinearSvg}></AntdIcon>;
};

SearchFavorite1Linear.displayName = 'SearchFavorite1Linear';
SearchFavorite1Linear.inheritAttrs = false;
export default SearchFavorite1Linear;