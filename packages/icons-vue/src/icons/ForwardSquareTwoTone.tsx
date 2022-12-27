// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForwardSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/ForwardSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForwardSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForwardSquareTwoTone: ForwardSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForwardSquareTwoToneSvg}></AntdIcon>;
};

ForwardSquareTwoTone.displayName = 'ForwardSquareTwoTone';
ForwardSquareTwoTone.inheritAttrs = false;
export default ForwardSquareTwoTone;