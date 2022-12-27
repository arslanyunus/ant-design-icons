// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchZoomOutBrokenSvg from '@ant-design/icons-svg/lib/asn/SearchZoomOutBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchZoomOutBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchZoomOutBroken: SearchZoomOutBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchZoomOutBrokenSvg}></AntdIcon>;
};

SearchZoomOutBroken.displayName = 'SearchZoomOutBroken';
SearchZoomOutBroken.inheritAttrs = false;
export default SearchZoomOutBroken;