// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchZoomOutTwoToneSvg from '@ant-design/icons-svg/lib/asn/SearchZoomOutTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchZoomOutTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchZoomOutTwoTone: SearchZoomOutTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchZoomOutTwoToneSvg}></AntdIcon>;
};

SearchZoomOutTwoTone.displayName = 'SearchZoomOutTwoTone';
SearchZoomOutTwoTone.inheritAttrs = false;
export default SearchZoomOutTwoTone;