// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldSecurityTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShieldSecurityTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldSecurityTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldSecurityTwoTone: ShieldSecurityTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldSecurityTwoToneSvg}></AntdIcon>;
};

ShieldSecurityTwoTone.displayName = 'ShieldSecurityTwoTone';
ShieldSecurityTwoTone.inheritAttrs = false;
export default ShieldSecurityTwoTone;