// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchStatusTwoToneSvg from '@ant-design/icons-svg/lib/asn/SearchStatusTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchStatusTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchStatusTwoTone: SearchStatusTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchStatusTwoToneSvg}></AntdIcon>;
};

SearchStatusTwoTone.displayName = 'SearchStatusTwoTone';
SearchStatusTwoTone.inheritAttrs = false;
export default SearchStatusTwoTone;