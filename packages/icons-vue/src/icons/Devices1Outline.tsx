// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Devices1OutlineSvg from '@ant-design/icons-svg/lib/asn/Devices1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Devices1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Devices1Outline: Devices1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Devices1OutlineSvg}></AntdIcon>;
};

Devices1Outline.displayName = 'Devices1Outline';
Devices1Outline.inheritAttrs = false;
export default Devices1Outline;