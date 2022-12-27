// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Bookmark2BrokenSvg from '@ant-design/icons-svg/lib/asn/Bookmark2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Bookmark2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Bookmark2Broken: Bookmark2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Bookmark2BrokenSvg}></AntdIcon>;
};

Bookmark2Broken.displayName = 'Bookmark2Broken';
Bookmark2Broken.inheritAttrs = false;
export default Bookmark2Broken;