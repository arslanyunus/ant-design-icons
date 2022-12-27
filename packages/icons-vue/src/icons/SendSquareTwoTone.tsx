// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SendSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/SendSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SendSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SendSquareTwoTone: SendSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SendSquareTwoToneSvg}></AntdIcon>;
};

SendSquareTwoTone.displayName = 'SendSquareTwoTone';
SendSquareTwoTone.inheritAttrs = false;
export default SendSquareTwoTone;