// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForwardSquareBoldSvg from '@ant-design/icons-svg/lib/asn/ForwardSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForwardSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForwardSquareBold: ForwardSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForwardSquareBoldSvg}></AntdIcon>;
};

ForwardSquareBold.displayName = 'ForwardSquareBold';
ForwardSquareBold.inheritAttrs = false;
export default ForwardSquareBold;