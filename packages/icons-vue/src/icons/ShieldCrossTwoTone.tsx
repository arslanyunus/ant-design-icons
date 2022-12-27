// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldCrossTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShieldCrossTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldCrossTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldCrossTwoTone: ShieldCrossTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldCrossTwoToneSvg}></AntdIcon>;
};

ShieldCrossTwoTone.displayName = 'ShieldCrossTwoTone';
ShieldCrossTwoTone.inheritAttrs = false;
export default ShieldCrossTwoTone;