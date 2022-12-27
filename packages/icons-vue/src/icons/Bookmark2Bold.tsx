// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Bookmark2BoldSvg from '@ant-design/icons-svg/lib/asn/Bookmark2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Bookmark2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Bookmark2Bold: Bookmark2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Bookmark2BoldSvg}></AntdIcon>;
};

Bookmark2Bold.displayName = 'Bookmark2Bold';
Bookmark2Bold.inheritAttrs = false;
export default Bookmark2Bold;