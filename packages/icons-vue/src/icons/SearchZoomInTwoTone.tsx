// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchZoomInTwoToneSvg from '@ant-design/icons-svg/lib/asn/SearchZoomInTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchZoomInTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchZoomInTwoTone: SearchZoomInTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchZoomInTwoToneSvg}></AntdIcon>;
};

SearchZoomInTwoTone.displayName = 'SearchZoomInTwoTone';
SearchZoomInTwoTone.inheritAttrs = false;
export default SearchZoomInTwoTone;