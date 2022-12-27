// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BackwardLinearSvg from '@ant-design/icons-svg/lib/asn/BackwardLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BackwardLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BackwardLinear: BackwardLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BackwardLinearSvg}></AntdIcon>;
};

BackwardLinear.displayName = 'BackwardLinear';
BackwardLinear.inheritAttrs = false;
export default BackwardLinear;