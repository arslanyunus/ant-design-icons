// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchZoomIn1OutlineSvg from '@ant-design/icons-svg/lib/asn/SearchZoomIn1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchZoomIn1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchZoomIn1Outline: SearchZoomIn1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchZoomIn1OutlineSvg}></AntdIcon>;
};

SearchZoomIn1Outline.displayName = 'SearchZoomIn1Outline';
SearchZoomIn1Outline.inheritAttrs = false;
export default SearchZoomIn1Outline;