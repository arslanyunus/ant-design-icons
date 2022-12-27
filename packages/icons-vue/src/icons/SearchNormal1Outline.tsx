// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchNormal1OutlineSvg from '@ant-design/icons-svg/lib/asn/SearchNormal1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchNormal1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchNormal1Outline: SearchNormal1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchNormal1OutlineSvg}></AntdIcon>;
};

SearchNormal1Outline.displayName = 'SearchNormal1Outline';
SearchNormal1Outline.inheritAttrs = false;
export default SearchNormal1Outline;