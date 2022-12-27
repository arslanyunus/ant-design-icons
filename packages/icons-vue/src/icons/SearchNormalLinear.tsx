// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchNormalLinearSvg from '@ant-design/icons-svg/lib/asn/SearchNormalLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchNormalLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchNormalLinear: SearchNormalLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchNormalLinearSvg}></AntdIcon>;
};

SearchNormalLinear.displayName = 'SearchNormalLinear';
SearchNormalLinear.inheritAttrs = false;
export default SearchNormalLinear;