// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SendLinearSvg from '@ant-design/icons-svg/lib/asn/SendLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SendLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SendLinear: SendLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SendLinearSvg}></AntdIcon>;
};

SendLinear.displayName = 'SendLinear';
SendLinear.inheritAttrs = false;
export default SendLinear;