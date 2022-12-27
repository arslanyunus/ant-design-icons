// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchZoomOut1OutlineSvg from '@ant-design/icons-svg/lib/asn/SearchZoomOut1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchZoomOut1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchZoomOut1Outline: SearchZoomOut1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchZoomOut1OutlineSvg}></AntdIcon>;
};

SearchZoomOut1Outline.displayName = 'SearchZoomOut1Outline';
SearchZoomOut1Outline.inheritAttrs = false;
export default SearchZoomOut1Outline;