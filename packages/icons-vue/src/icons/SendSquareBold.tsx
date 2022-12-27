// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SendSquareBoldSvg from '@ant-design/icons-svg/lib/asn/SendSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SendSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SendSquareBold: SendSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SendSquareBoldSvg}></AntdIcon>;
};

SendSquareBold.displayName = 'SendSquareBold';
SendSquareBold.inheritAttrs = false;
export default SendSquareBold;