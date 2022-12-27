// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Bluetooth2BoldSvg from '@ant-design/icons-svg/lib/asn/Bluetooth2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Bluetooth2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Bluetooth2Bold: Bluetooth2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Bluetooth2BoldSvg}></AntdIcon>;
};

Bluetooth2Bold.displayName = 'Bluetooth2Bold';
Bluetooth2Bold.inheritAttrs = false;
export default Bluetooth2Bold;