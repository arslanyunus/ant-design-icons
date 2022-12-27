// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchZoomOut1LinearSvg from '@ant-design/icons-svg/lib/asn/SearchZoomOut1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchZoomOut1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchZoomOut1Linear: SearchZoomOut1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchZoomOut1LinearSvg}></AntdIcon>;
};

SearchZoomOut1Linear.displayName = 'SearchZoomOut1Linear';
SearchZoomOut1Linear.inheritAttrs = false;
export default SearchZoomOut1Linear;