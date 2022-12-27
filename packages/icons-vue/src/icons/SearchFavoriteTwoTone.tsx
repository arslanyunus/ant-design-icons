// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchFavoriteTwoToneSvg from '@ant-design/icons-svg/lib/asn/SearchFavoriteTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchFavoriteTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchFavoriteTwoTone: SearchFavoriteTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchFavoriteTwoToneSvg}></AntdIcon>;
};

SearchFavoriteTwoTone.displayName = 'SearchFavoriteTwoTone';
SearchFavoriteTwoTone.inheritAttrs = false;
export default SearchFavoriteTwoTone;