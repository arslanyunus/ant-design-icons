// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchZoomIn1BrokenSvg from '@ant-design/icons-svg/lib/asn/SearchZoomIn1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchZoomIn1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchZoomIn1Broken: SearchZoomIn1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchZoomIn1BrokenSvg}></AntdIcon>;
};

SearchZoomIn1Broken.displayName = 'SearchZoomIn1Broken';
SearchZoomIn1Broken.inheritAttrs = false;
export default SearchZoomIn1Broken;