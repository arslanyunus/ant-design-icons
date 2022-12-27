// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchZoomOut1TwoToneSvg from '@ant-design/icons-svg/lib/asn/SearchZoomOut1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchZoomOut1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchZoomOut1TwoTone: SearchZoomOut1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchZoomOut1TwoToneSvg}></AntdIcon>;
};

SearchZoomOut1TwoTone.displayName = 'SearchZoomOut1TwoTone';
SearchZoomOut1TwoTone.inheritAttrs = false;
export default SearchZoomOut1TwoTone;