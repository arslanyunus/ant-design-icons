// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SendSqaure2TwoToneSvg from '@ant-design/icons-svg/lib/asn/SendSqaure2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SendSqaure2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SendSqaure2TwoTone: SendSqaure2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SendSqaure2TwoToneSvg}></AntdIcon>;
};

SendSqaure2TwoTone.displayName = 'SendSqaure2TwoTone';
SendSqaure2TwoTone.inheritAttrs = false;
export default SendSqaure2TwoTone;