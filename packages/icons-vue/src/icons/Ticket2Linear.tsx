// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Ticket2LinearSvg from '@ant-design/icons-svg/lib/asn/Ticket2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Ticket2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Ticket2Linear: Ticket2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Ticket2LinearSvg}></AntdIcon>;
};

Ticket2Linear.displayName = 'Ticket2Linear';
Ticket2Linear.inheritAttrs = false;
export default Ticket2Linear;