// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchStatusBoldSvg from '@ant-design/icons-svg/lib/asn/SearchStatusBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchStatusBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchStatusBold: SearchStatusBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchStatusBoldSvg}></AntdIcon>;
};

SearchStatusBold.displayName = 'SearchStatusBold';
SearchStatusBold.inheritAttrs = false;
export default SearchStatusBold;