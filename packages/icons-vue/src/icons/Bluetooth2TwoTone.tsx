// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Bluetooth2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Bluetooth2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Bluetooth2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Bluetooth2TwoTone: Bluetooth2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Bluetooth2TwoToneSvg}></AntdIcon>;
};

Bluetooth2TwoTone.displayName = 'Bluetooth2TwoTone';
Bluetooth2TwoTone.inheritAttrs = false;
export default Bluetooth2TwoTone;