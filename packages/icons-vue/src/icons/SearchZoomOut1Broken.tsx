// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchZoomOut1BrokenSvg from '@ant-design/icons-svg/lib/asn/SearchZoomOut1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchZoomOut1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchZoomOut1Broken: SearchZoomOut1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchZoomOut1BrokenSvg}></AntdIcon>;
};

SearchZoomOut1Broken.displayName = 'SearchZoomOut1Broken';
SearchZoomOut1Broken.inheritAttrs = false;
export default SearchZoomOut1Broken;