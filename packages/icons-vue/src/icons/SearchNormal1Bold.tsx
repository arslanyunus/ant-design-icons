// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchNormal1BoldSvg from '@ant-design/icons-svg/lib/asn/SearchNormal1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchNormal1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchNormal1Bold: SearchNormal1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchNormal1BoldSvg}></AntdIcon>;
};

SearchNormal1Bold.displayName = 'SearchNormal1Bold';
SearchNormal1Bold.inheritAttrs = false;
export default SearchNormal1Bold;