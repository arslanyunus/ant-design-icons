// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Notification1BrokenSvg from '@ant-design/icons-svg/lib/asn/Notification1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Notification1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Notification1Broken: Notification1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Notification1BrokenSvg}></AntdIcon>;
};

Notification1Broken.displayName = 'Notification1Broken';
Notification1Broken.inheritAttrs = false;
export default Notification1Broken;