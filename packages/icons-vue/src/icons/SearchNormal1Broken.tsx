// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchNormal1BrokenSvg from '@ant-design/icons-svg/lib/asn/SearchNormal1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchNormal1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchNormal1Broken: SearchNormal1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchNormal1BrokenSvg}></AntdIcon>;
};

SearchNormal1Broken.displayName = 'SearchNormal1Broken';
SearchNormal1Broken.inheritAttrs = false;
export default SearchNormal1Broken;