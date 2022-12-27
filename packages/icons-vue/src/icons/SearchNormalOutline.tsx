// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchNormalOutlineSvg from '@ant-design/icons-svg/lib/asn/SearchNormalOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchNormalOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchNormalOutline: SearchNormalOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchNormalOutlineSvg}></AntdIcon>;
};

SearchNormalOutline.displayName = 'SearchNormalOutline';
SearchNormalOutline.inheritAttrs = false;
export default SearchNormalOutline;