// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchNormal1TwoToneSvg from '@ant-design/icons-svg/lib/asn/SearchNormal1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchNormal1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchNormal1TwoTone: SearchNormal1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchNormal1TwoToneSvg}></AntdIcon>;
};

SearchNormal1TwoTone.displayName = 'SearchNormal1TwoTone';
SearchNormal1TwoTone.inheritAttrs = false;
export default SearchNormal1TwoTone;