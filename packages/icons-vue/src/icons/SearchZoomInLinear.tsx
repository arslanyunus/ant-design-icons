// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchZoomInLinearSvg from '@ant-design/icons-svg/lib/asn/SearchZoomInLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchZoomInLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchZoomInLinear: SearchZoomInLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchZoomInLinearSvg}></AntdIcon>;
};

SearchZoomInLinear.displayName = 'SearchZoomInLinear';
SearchZoomInLinear.inheritAttrs = false;
export default SearchZoomInLinear;