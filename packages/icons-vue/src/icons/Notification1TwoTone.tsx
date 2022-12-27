// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Notification1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Notification1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Notification1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Notification1TwoTone: Notification1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Notification1TwoToneSvg}></AntdIcon>;
};

Notification1TwoTone.displayName = 'Notification1TwoTone';
Notification1TwoTone.inheritAttrs = false;
export default Notification1TwoTone;