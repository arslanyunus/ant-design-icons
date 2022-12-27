// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SendBrokenSvg from '@ant-design/icons-svg/lib/asn/SendBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SendBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SendBroken: SendBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SendBrokenSvg}></AntdIcon>;
};

SendBroken.displayName = 'SendBroken';
SendBroken.inheritAttrs = false;
export default SendBroken;