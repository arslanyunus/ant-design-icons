// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForwardItemLinearSvg from '@ant-design/icons-svg/lib/asn/ForwardItemLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForwardItemLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForwardItemLinear: ForwardItemLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForwardItemLinearSvg}></AntdIcon>;
};

ForwardItemLinear.displayName = 'ForwardItemLinear';
ForwardItemLinear.inheritAttrs = false;
export default ForwardItemLinear;