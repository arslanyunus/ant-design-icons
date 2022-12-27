// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MagicpenOutlineSvg from '@ant-design/icons-svg/lib/asn/MagicpenOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MagicpenOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MagicpenOutline: MagicpenOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MagicpenOutlineSvg}></AntdIcon>;
};

MagicpenOutline.displayName = 'MagicpenOutline';
MagicpenOutline.inheritAttrs = false;
export default MagicpenOutline;