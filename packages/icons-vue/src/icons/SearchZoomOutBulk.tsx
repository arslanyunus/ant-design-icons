// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchZoomOutBulkSvg from '@ant-design/icons-svg/lib/asn/SearchZoomOutBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchZoomOutBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchZoomOutBulk: SearchZoomOutBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchZoomOutBulkSvg}></AntdIcon>;
};

SearchZoomOutBulk.displayName = 'SearchZoomOutBulk';
SearchZoomOutBulk.inheritAttrs = false;
export default SearchZoomOutBulk;