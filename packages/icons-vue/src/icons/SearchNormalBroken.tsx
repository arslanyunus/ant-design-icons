// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchNormalBrokenSvg from '@ant-design/icons-svg/lib/asn/SearchNormalBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchNormalBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchNormalBroken: SearchNormalBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchNormalBrokenSvg}></AntdIcon>;
};

SearchNormalBroken.displayName = 'SearchNormalBroken';
SearchNormalBroken.inheritAttrs = false;
export default SearchNormalBroken;