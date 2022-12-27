// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchStatus1TwoToneSvg from '@ant-design/icons-svg/lib/asn/SearchStatus1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchStatus1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchStatus1TwoTone: SearchStatus1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchStatus1TwoToneSvg}></AntdIcon>;
};

SearchStatus1TwoTone.displayName = 'SearchStatus1TwoTone';
SearchStatus1TwoTone.inheritAttrs = false;
export default SearchStatus1TwoTone;