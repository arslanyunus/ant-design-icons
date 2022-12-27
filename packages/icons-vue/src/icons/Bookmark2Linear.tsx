// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Bookmark2LinearSvg from '@ant-design/icons-svg/lib/asn/Bookmark2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Bookmark2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Bookmark2Linear: Bookmark2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Bookmark2LinearSvg}></AntdIcon>;
};

Bookmark2Linear.displayName = 'Bookmark2Linear';
Bookmark2Linear.inheritAttrs = false;
export default Bookmark2Linear;