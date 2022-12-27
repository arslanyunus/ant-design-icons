// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchZoomInBulkSvg from '@ant-design/icons-svg/lib/asn/SearchZoomInBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchZoomInBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchZoomInBulk: SearchZoomInBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchZoomInBulkSvg}></AntdIcon>;
};

SearchZoomInBulk.displayName = 'SearchZoomInBulk';
SearchZoomInBulk.inheritAttrs = false;
export default SearchZoomInBulk;