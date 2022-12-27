// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchZoomOutBoldSvg from '@ant-design/icons-svg/lib/asn/SearchZoomOutBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchZoomOutBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchZoomOutBold: SearchZoomOutBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchZoomOutBoldSvg}></AntdIcon>;
};

SearchZoomOutBold.displayName = 'SearchZoomOutBold';
SearchZoomOutBold.inheritAttrs = false;
export default SearchZoomOutBold;