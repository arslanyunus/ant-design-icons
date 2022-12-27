// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BriefcaseOutlineSvg from '@ant-design/icons-svg/lib/asn/BriefcaseOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BriefcaseOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BriefcaseOutline: BriefcaseOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BriefcaseOutlineSvg}></AntdIcon>;
};

BriefcaseOutline.displayName = 'BriefcaseOutline';
BriefcaseOutline.inheritAttrs = false;
export default BriefcaseOutline;