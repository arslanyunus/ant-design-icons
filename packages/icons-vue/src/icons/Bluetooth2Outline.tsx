// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Bluetooth2OutlineSvg from '@ant-design/icons-svg/lib/asn/Bluetooth2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Bluetooth2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Bluetooth2Outline: Bluetooth2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Bluetooth2OutlineSvg}></AntdIcon>;
};

Bluetooth2Outline.displayName = 'Bluetooth2Outline';
Bluetooth2Outline.inheritAttrs = false;
export default Bluetooth2Outline;