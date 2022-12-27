// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoreCircleLinearSvg from '@ant-design/icons-svg/lib/asn/MoreCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoreCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoreCircleLinear: MoreCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoreCircleLinearSvg}></AntdIcon>;
};

MoreCircleLinear.displayName = 'MoreCircleLinear';
MoreCircleLinear.inheritAttrs = false;
export default MoreCircleLinear;