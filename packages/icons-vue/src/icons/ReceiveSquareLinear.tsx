// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiveSquareLinearSvg from '@ant-design/icons-svg/lib/asn/ReceiveSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiveSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiveSquareLinear: ReceiveSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiveSquareLinearSvg}></AntdIcon>;
};

ReceiveSquareLinear.displayName = 'ReceiveSquareLinear';
ReceiveSquareLinear.inheritAttrs = false;
export default ReceiveSquareLinear;