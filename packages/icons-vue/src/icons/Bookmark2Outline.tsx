// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Bookmark2OutlineSvg from '@ant-design/icons-svg/lib/asn/Bookmark2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Bookmark2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Bookmark2Outline: Bookmark2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Bookmark2OutlineSvg}></AntdIcon>;
};

Bookmark2Outline.displayName = 'Bookmark2Outline';
Bookmark2Outline.inheritAttrs = false;
export default Bookmark2Outline;