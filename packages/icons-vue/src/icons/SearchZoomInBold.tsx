// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchZoomInBoldSvg from '@ant-design/icons-svg/lib/asn/SearchZoomInBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchZoomInBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchZoomInBold: SearchZoomInBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchZoomInBoldSvg}></AntdIcon>;
};

SearchZoomInBold.displayName = 'SearchZoomInBold';
SearchZoomInBold.inheritAttrs = false;
export default SearchZoomInBold;