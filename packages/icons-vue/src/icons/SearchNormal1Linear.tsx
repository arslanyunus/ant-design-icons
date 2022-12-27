// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchNormal1LinearSvg from '@ant-design/icons-svg/lib/asn/SearchNormal1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchNormal1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchNormal1Linear: SearchNormal1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchNormal1LinearSvg}></AntdIcon>;
};

SearchNormal1Linear.displayName = 'SearchNormal1Linear';
SearchNormal1Linear.inheritAttrs = false;
export default SearchNormal1Linear;