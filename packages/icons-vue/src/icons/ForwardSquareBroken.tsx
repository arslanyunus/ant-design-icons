// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForwardSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/ForwardSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForwardSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForwardSquareBroken: ForwardSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForwardSquareBrokenSvg}></AntdIcon>;
};

ForwardSquareBroken.displayName = 'ForwardSquareBroken';
ForwardSquareBroken.inheritAttrs = false;
export default ForwardSquareBroken;