// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchStatus1OutlineSvg from '@ant-design/icons-svg/lib/asn/SearchStatus1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchStatus1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchStatus1Outline: SearchStatus1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchStatus1OutlineSvg}></AntdIcon>;
};

SearchStatus1Outline.displayName = 'SearchStatus1Outline';
SearchStatus1Outline.inheritAttrs = false;
export default SearchStatus1Outline;