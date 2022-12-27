// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirdropLinearSvg from '@ant-design/icons-svg/lib/asn/AirdropLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirdropLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirdropLinear: AirdropLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirdropLinearSvg}></AntdIcon>;
};

AirdropLinear.displayName = 'AirdropLinear';
AirdropLinear.inheritAttrs = false;
export default AirdropLinear;