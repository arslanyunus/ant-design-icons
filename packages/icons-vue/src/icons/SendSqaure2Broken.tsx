// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SendSqaure2BrokenSvg from '@ant-design/icons-svg/lib/asn/SendSqaure2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SendSqaure2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SendSqaure2Broken: SendSqaure2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SendSqaure2BrokenSvg}></AntdIcon>;
};

SendSqaure2Broken.displayName = 'SendSqaure2Broken';
SendSqaure2Broken.inheritAttrs = false;
export default SendSqaure2Broken;