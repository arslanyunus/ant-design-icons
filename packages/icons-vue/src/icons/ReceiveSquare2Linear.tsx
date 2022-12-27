// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiveSquare2LinearSvg from '@ant-design/icons-svg/lib/asn/ReceiveSquare2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiveSquare2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiveSquare2Linear: ReceiveSquare2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiveSquare2LinearSvg}></AntdIcon>;
};

ReceiveSquare2Linear.displayName = 'ReceiveSquare2Linear';
ReceiveSquare2Linear.inheritAttrs = false;
export default ReceiveSquare2Linear;