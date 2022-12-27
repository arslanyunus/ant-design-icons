// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchStatus1BrokenSvg from '@ant-design/icons-svg/lib/asn/SearchStatus1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchStatus1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchStatus1Broken: SearchStatus1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchStatus1BrokenSvg}></AntdIcon>;
};

SearchStatus1Broken.displayName = 'SearchStatus1Broken';
SearchStatus1Broken.inheritAttrs = false;
export default SearchStatus1Broken;