// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Notification1LinearSvg from '@ant-design/icons-svg/lib/asn/Notification1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Notification1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Notification1Linear: Notification1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Notification1LinearSvg}></AntdIcon>;
};

Notification1Linear.displayName = 'Notification1Linear';
Notification1Linear.inheritAttrs = false;
export default Notification1Linear;