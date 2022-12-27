// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchZoomIn1BoldSvg from '@ant-design/icons-svg/lib/asn/SearchZoomIn1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchZoomIn1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchZoomIn1Bold: SearchZoomIn1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchZoomIn1BoldSvg}></AntdIcon>;
};

SearchZoomIn1Bold.displayName = 'SearchZoomIn1Bold';
SearchZoomIn1Bold.inheritAttrs = false;
export default SearchZoomIn1Bold;