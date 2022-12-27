// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchStatusLinearSvg from '@ant-design/icons-svg/lib/asn/SearchStatusLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchStatusLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchStatusLinear: SearchStatusLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchStatusLinearSvg}></AntdIcon>;
};

SearchStatusLinear.displayName = 'SearchStatusLinear';
SearchStatusLinear.inheritAttrs = false;
export default SearchStatusLinear;