// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AwardLinearSvg from '@ant-design/icons-svg/lib/asn/AwardLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AwardLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AwardLinear: AwardLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AwardLinearSvg}></AntdIcon>;
};

AwardLinear.displayName = 'AwardLinear';
AwardLinear.inheritAttrs = false;
export default AwardLinear;