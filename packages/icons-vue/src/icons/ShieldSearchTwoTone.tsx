// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldSearchTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShieldSearchTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldSearchTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldSearchTwoTone: ShieldSearchTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldSearchTwoToneSvg}></AntdIcon>;
};

ShieldSearchTwoTone.displayName = 'ShieldSearchTwoTone';
ShieldSearchTwoTone.inheritAttrs = false;
export default ShieldSearchTwoTone;