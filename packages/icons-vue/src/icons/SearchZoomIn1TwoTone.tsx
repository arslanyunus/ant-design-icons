// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchZoomIn1TwoToneSvg from '@ant-design/icons-svg/lib/asn/SearchZoomIn1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchZoomIn1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchZoomIn1TwoTone: SearchZoomIn1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchZoomIn1TwoToneSvg}></AntdIcon>;
};

SearchZoomIn1TwoTone.displayName = 'SearchZoomIn1TwoTone';
SearchZoomIn1TwoTone.inheritAttrs = false;
export default SearchZoomIn1TwoTone;