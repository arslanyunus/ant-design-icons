// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShieldTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldTwoTone: ShieldTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldTwoToneSvg}></AntdIcon>;
};

ShieldTwoTone.displayName = 'ShieldTwoTone';
ShieldTwoTone.inheritAttrs = false;
export default ShieldTwoTone;