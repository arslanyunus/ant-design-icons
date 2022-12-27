// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchZoomOut1BulkSvg from '@ant-design/icons-svg/lib/asn/SearchZoomOut1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchZoomOut1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchZoomOut1Bulk: SearchZoomOut1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchZoomOut1BulkSvg}></AntdIcon>;
};

SearchZoomOut1Bulk.displayName = 'SearchZoomOut1Bulk';
SearchZoomOut1Bulk.inheritAttrs = false;
export default SearchZoomOut1Bulk;