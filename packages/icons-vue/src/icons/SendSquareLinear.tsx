// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SendSquareLinearSvg from '@ant-design/icons-svg/lib/asn/SendSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SendSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SendSquareLinear: SendSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SendSquareLinearSvg}></AntdIcon>;
};

SendSquareLinear.displayName = 'SendSquareLinear';
SendSquareLinear.inheritAttrs = false;
export default SendSquareLinear;