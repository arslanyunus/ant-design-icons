// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchStatus1LinearSvg from '@ant-design/icons-svg/lib/asn/SearchStatus1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchStatus1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchStatus1Linear: SearchStatus1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchStatus1LinearSvg}></AntdIcon>;
};

SearchStatus1Linear.displayName = 'SearchStatus1Linear';
SearchStatus1Linear.inheritAttrs = false;
export default SearchStatus1Linear;