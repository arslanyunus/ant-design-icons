// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Notification1BoldSvg from '@ant-design/icons-svg/lib/asn/Notification1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Notification1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Notification1Bold: Notification1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Notification1BoldSvg}></AntdIcon>;
};

Notification1Bold.displayName = 'Notification1Bold';
Notification1Bold.inheritAttrs = false;
export default Notification1Bold;