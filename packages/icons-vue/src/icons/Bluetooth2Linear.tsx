// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Bluetooth2LinearSvg from '@ant-design/icons-svg/lib/asn/Bluetooth2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Bluetooth2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Bluetooth2Linear: Bluetooth2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Bluetooth2LinearSvg}></AntdIcon>;
};

Bluetooth2Linear.displayName = 'Bluetooth2Linear';
Bluetooth2Linear.inheritAttrs = false;
export default Bluetooth2Linear;