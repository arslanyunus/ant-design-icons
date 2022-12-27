// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MagicpenLinearSvg from '@ant-design/icons-svg/lib/asn/MagicpenLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MagicpenLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MagicpenLinear: MagicpenLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MagicpenLinearSvg}></AntdIcon>;
};

MagicpenLinear.displayName = 'MagicpenLinear';
MagicpenLinear.inheritAttrs = false;
export default MagicpenLinear;