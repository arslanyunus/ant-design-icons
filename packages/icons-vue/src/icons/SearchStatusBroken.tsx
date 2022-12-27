// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchStatusBrokenSvg from '@ant-design/icons-svg/lib/asn/SearchStatusBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchStatusBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchStatusBroken: SearchStatusBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchStatusBrokenSvg}></AntdIcon>;
};

SearchStatusBroken.displayName = 'SearchStatusBroken';
SearchStatusBroken.inheritAttrs = false;
export default SearchStatusBroken;