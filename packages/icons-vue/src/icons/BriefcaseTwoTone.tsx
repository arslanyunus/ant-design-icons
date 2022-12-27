// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BriefcaseTwoToneSvg from '@ant-design/icons-svg/lib/asn/BriefcaseTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BriefcaseTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BriefcaseTwoTone: BriefcaseTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BriefcaseTwoToneSvg}></AntdIcon>;
};

BriefcaseTwoTone.displayName = 'BriefcaseTwoTone';
BriefcaseTwoTone.inheritAttrs = false;
export default BriefcaseTwoTone;