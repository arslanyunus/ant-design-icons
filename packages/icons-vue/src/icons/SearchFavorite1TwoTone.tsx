// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchFavorite1TwoToneSvg from '@ant-design/icons-svg/lib/asn/SearchFavorite1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchFavorite1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchFavorite1TwoTone: SearchFavorite1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchFavorite1TwoToneSvg}></AntdIcon>;
};

SearchFavorite1TwoTone.displayName = 'SearchFavorite1TwoTone';
SearchFavorite1TwoTone.inheritAttrs = false;
export default SearchFavorite1TwoTone;