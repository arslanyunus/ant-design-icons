// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchZoomOut1BoldSvg from '@ant-design/icons-svg/lib/asn/SearchZoomOut1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchZoomOut1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchZoomOut1Bold: SearchZoomOut1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchZoomOut1BoldSvg}></AntdIcon>;
};

SearchZoomOut1Bold.displayName = 'SearchZoomOut1Bold';
SearchZoomOut1Bold.inheritAttrs = false;
export default SearchZoomOut1Bold;