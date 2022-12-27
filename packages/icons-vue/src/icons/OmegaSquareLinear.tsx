// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import OmegaSquareLinearSvg from '@ant-design/icons-svg/lib/asn/OmegaSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface OmegaSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const OmegaSquareLinear: OmegaSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OmegaSquareLinearSvg}></AntdIcon>;
};

OmegaSquareLinear.displayName = 'OmegaSquareLinear';
OmegaSquareLinear.inheritAttrs = false;
export default OmegaSquareLinear;