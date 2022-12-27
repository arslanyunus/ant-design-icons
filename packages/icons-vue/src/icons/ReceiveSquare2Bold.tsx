// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiveSquare2BoldSvg from '@ant-design/icons-svg/lib/asn/ReceiveSquare2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiveSquare2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiveSquare2Bold: ReceiveSquare2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiveSquare2BoldSvg}></AntdIcon>;
};

ReceiveSquare2Bold.displayName = 'ReceiveSquare2Bold';
ReceiveSquare2Bold.inheritAttrs = false;
export default ReceiveSquare2Bold;