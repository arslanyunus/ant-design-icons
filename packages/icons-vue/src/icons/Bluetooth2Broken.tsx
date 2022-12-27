// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Bluetooth2BrokenSvg from '@ant-design/icons-svg/lib/asn/Bluetooth2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Bluetooth2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Bluetooth2Broken: Bluetooth2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Bluetooth2BrokenSvg}></AntdIcon>;
};

Bluetooth2Broken.displayName = 'Bluetooth2Broken';
Bluetooth2Broken.inheritAttrs = false;
export default Bluetooth2Broken;