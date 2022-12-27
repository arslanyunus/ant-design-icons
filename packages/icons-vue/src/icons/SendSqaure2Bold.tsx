// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SendSqaure2BoldSvg from '@ant-design/icons-svg/lib/asn/SendSqaure2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SendSqaure2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SendSqaure2Bold: SendSqaure2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SendSqaure2BoldSvg}></AntdIcon>;
};

SendSqaure2Bold.displayName = 'SendSqaure2Bold';
SendSqaure2Bold.inheritAttrs = false;
export default SendSqaure2Bold;