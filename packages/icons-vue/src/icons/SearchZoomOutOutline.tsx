// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchZoomOutOutlineSvg from '@ant-design/icons-svg/lib/asn/SearchZoomOutOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchZoomOutOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchZoomOutOutline: SearchZoomOutOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchZoomOutOutlineSvg}></AntdIcon>;
};

SearchZoomOutOutline.displayName = 'SearchZoomOutOutline';
SearchZoomOutOutline.inheritAttrs = false;
export default SearchZoomOutOutline;