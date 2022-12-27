// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BriefcaseBoldSvg from '@ant-design/icons-svg/lib/asn/BriefcaseBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BriefcaseBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BriefcaseBold: BriefcaseBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BriefcaseBoldSvg}></AntdIcon>;
};

BriefcaseBold.displayName = 'BriefcaseBold';
BriefcaseBold.inheritAttrs = false;
export default BriefcaseBold;