// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SendTwoToneSvg from '@ant-design/icons-svg/lib/asn/SendTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SendTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SendTwoTone: SendTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SendTwoToneSvg}></AntdIcon>;
};

SendTwoTone.displayName = 'SendTwoTone';
SendTwoTone.inheritAttrs = false;
export default SendTwoTone;