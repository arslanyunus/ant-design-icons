// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SendSqaure2OutlineSvg from '@ant-design/icons-svg/lib/asn/SendSqaure2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SendSqaure2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SendSqaure2Outline: SendSqaure2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SendSqaure2OutlineSvg}></AntdIcon>;
};

SendSqaure2Outline.displayName = 'SendSqaure2Outline';
SendSqaure2Outline.inheritAttrs = false;
export default SendSqaure2Outline;