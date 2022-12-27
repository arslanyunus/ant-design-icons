// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchNormalTwoToneSvg from '@ant-design/icons-svg/lib/asn/SearchNormalTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchNormalTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchNormalTwoTone: SearchNormalTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchNormalTwoToneSvg}></AntdIcon>;
};

SearchNormalTwoTone.displayName = 'SearchNormalTwoTone';
SearchNormalTwoTone.inheritAttrs = false;
export default SearchNormalTwoTone;