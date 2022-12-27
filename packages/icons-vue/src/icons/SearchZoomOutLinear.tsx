// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchZoomOutLinearSvg from '@ant-design/icons-svg/lib/asn/SearchZoomOutLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchZoomOutLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchZoomOutLinear: SearchZoomOutLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchZoomOutLinearSvg}></AntdIcon>;
};

SearchZoomOutLinear.displayName = 'SearchZoomOutLinear';
SearchZoomOutLinear.inheritAttrs = false;
export default SearchZoomOutLinear;