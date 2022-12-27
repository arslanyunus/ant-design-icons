// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForwardSquareLinearSvg from '@ant-design/icons-svg/lib/asn/ForwardSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForwardSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForwardSquareLinear: ForwardSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForwardSquareLinearSvg}></AntdIcon>;
};

ForwardSquareLinear.displayName = 'ForwardSquareLinear';
ForwardSquareLinear.inheritAttrs = false;
export default ForwardSquareLinear;