// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForwardLinearSvg from '@ant-design/icons-svg/lib/asn/ForwardLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForwardLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForwardLinear: ForwardLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForwardLinearSvg}></AntdIcon>;
};

ForwardLinear.displayName = 'ForwardLinear';
ForwardLinear.inheritAttrs = false;
export default ForwardLinear;