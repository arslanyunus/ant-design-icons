// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchZoomInOutlineSvg from '@ant-design/icons-svg/lib/asn/SearchZoomInOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchZoomInOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchZoomInOutline: SearchZoomInOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchZoomInOutlineSvg}></AntdIcon>;
};

SearchZoomInOutline.displayName = 'SearchZoomInOutline';
SearchZoomInOutline.inheritAttrs = false;
export default SearchZoomInOutline;