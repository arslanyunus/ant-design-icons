// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchZoomInBrokenSvg from '@ant-design/icons-svg/lib/asn/SearchZoomInBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchZoomInBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchZoomInBroken: SearchZoomInBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchZoomInBrokenSvg}></AntdIcon>;
};

SearchZoomInBroken.displayName = 'SearchZoomInBroken';
SearchZoomInBroken.inheritAttrs = false;
export default SearchZoomInBroken;