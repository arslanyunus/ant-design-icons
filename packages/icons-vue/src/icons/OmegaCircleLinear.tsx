// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import OmegaCircleLinearSvg from '@ant-design/icons-svg/lib/asn/OmegaCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface OmegaCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const OmegaCircleLinear: OmegaCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OmegaCircleLinearSvg}></AntdIcon>;
};

OmegaCircleLinear.displayName = 'OmegaCircleLinear';
OmegaCircleLinear.inheritAttrs = false;
export default OmegaCircleLinear;