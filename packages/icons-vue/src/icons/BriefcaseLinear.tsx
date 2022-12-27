// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BriefcaseLinearSvg from '@ant-design/icons-svg/lib/asn/BriefcaseLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BriefcaseLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BriefcaseLinear: BriefcaseLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BriefcaseLinearSvg}></AntdIcon>;
};

BriefcaseLinear.displayName = 'BriefcaseLinear';
BriefcaseLinear.inheritAttrs = false;
export default BriefcaseLinear;