// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchStatusBulkSvg from '@ant-design/icons-svg/lib/asn/SearchStatusBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchStatusBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchStatusBulk: SearchStatusBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchStatusBulkSvg}></AntdIcon>;
};

SearchStatusBulk.displayName = 'SearchStatusBulk';
SearchStatusBulk.inheritAttrs = false;
export default SearchStatusBulk;