// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchZoomIn1BulkSvg from '@ant-design/icons-svg/lib/asn/SearchZoomIn1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchZoomIn1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchZoomIn1Bulk: SearchZoomIn1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchZoomIn1BulkSvg}></AntdIcon>;
};

SearchZoomIn1Bulk.displayName = 'SearchZoomIn1Bulk';
SearchZoomIn1Bulk.inheritAttrs = false;
export default SearchZoomIn1Bulk;