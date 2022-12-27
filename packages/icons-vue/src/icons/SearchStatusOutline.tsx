// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchStatusOutlineSvg from '@ant-design/icons-svg/lib/asn/SearchStatusOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchStatusOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchStatusOutline: SearchStatusOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchStatusOutlineSvg}></AntdIcon>;
};

SearchStatusOutline.displayName = 'SearchStatusOutline';
SearchStatusOutline.inheritAttrs = false;
export default SearchStatusOutline;