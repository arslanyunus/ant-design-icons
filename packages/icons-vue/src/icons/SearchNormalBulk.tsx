// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchNormalBulkSvg from '@ant-design/icons-svg/lib/asn/SearchNormalBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchNormalBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchNormalBulk: SearchNormalBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchNormalBulkSvg}></AntdIcon>;
};

SearchNormalBulk.displayName = 'SearchNormalBulk';
SearchNormalBulk.inheritAttrs = false;
export default SearchNormalBulk;