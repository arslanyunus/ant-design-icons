// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BriefcaseBrokenSvg from '@ant-design/icons-svg/lib/asn/BriefcaseBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BriefcaseBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BriefcaseBroken: BriefcaseBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BriefcaseBrokenSvg}></AntdIcon>;
};

BriefcaseBroken.displayName = 'BriefcaseBroken';
BriefcaseBroken.inheritAttrs = false;
export default BriefcaseBroken;