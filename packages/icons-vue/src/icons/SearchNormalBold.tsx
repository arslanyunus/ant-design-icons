// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchNormalBoldSvg from '@ant-design/icons-svg/lib/asn/SearchNormalBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchNormalBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchNormalBold: SearchNormalBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchNormalBoldSvg}></AntdIcon>;
};

SearchNormalBold.displayName = 'SearchNormalBold';
SearchNormalBold.inheritAttrs = false;
export default SearchNormalBold;