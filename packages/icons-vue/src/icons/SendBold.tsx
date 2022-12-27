// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SendBoldSvg from '@ant-design/icons-svg/lib/asn/SendBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SendBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SendBold: SendBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SendBoldSvg}></AntdIcon>;
};

SendBold.displayName = 'SendBold';
SendBold.inheritAttrs = false;
export default SendBold;