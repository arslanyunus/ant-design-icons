// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SimcardLinearSvg from '@ant-design/icons-svg/lib/asn/SimcardLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SimcardLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SimcardLinear: SimcardLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SimcardLinearSvg}></AntdIcon>;
};

SimcardLinear.displayName = 'SimcardLinear';
SimcardLinear.inheritAttrs = false;
export default SimcardLinear;