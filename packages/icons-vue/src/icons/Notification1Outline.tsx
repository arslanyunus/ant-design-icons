// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Notification1OutlineSvg from '@ant-design/icons-svg/lib/asn/Notification1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Notification1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Notification1Outline: Notification1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Notification1OutlineSvg}></AntdIcon>;
};

Notification1Outline.displayName = 'Notification1Outline';
Notification1Outline.inheritAttrs = false;
export default Notification1Outline;