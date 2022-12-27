// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SendSqaure2LinearSvg from '@ant-design/icons-svg/lib/asn/SendSqaure2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SendSqaure2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SendSqaure2Linear: SendSqaure2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SendSqaure2LinearSvg}></AntdIcon>;
};

SendSqaure2Linear.displayName = 'SendSqaure2Linear';
SendSqaure2Linear.inheritAttrs = false;
export default SendSqaure2Linear;