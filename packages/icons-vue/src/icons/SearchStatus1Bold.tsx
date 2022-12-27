// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchStatus1BoldSvg from '@ant-design/icons-svg/lib/asn/SearchStatus1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchStatus1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchStatus1Bold: SearchStatus1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchStatus1BoldSvg}></AntdIcon>;
};

SearchStatus1Bold.displayName = 'SearchStatus1Bold';
SearchStatus1Bold.inheritAttrs = false;
export default SearchStatus1Bold;