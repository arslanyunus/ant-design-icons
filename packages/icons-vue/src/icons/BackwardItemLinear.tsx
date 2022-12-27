// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BackwardItemLinearSvg from '@ant-design/icons-svg/lib/asn/BackwardItemLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BackwardItemLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BackwardItemLinear: BackwardItemLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BackwardItemLinearSvg}></AntdIcon>;
};

BackwardItemLinear.displayName = 'BackwardItemLinear';
BackwardItemLinear.inheritAttrs = false;
export default BackwardItemLinear;