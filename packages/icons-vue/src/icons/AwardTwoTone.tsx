// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AwardTwoToneSvg from '@ant-design/icons-svg/lib/asn/AwardTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AwardTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AwardTwoTone: AwardTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AwardTwoToneSvg}></AntdIcon>;
};

AwardTwoTone.displayName = 'AwardTwoTone';
AwardTwoTone.inheritAttrs = false;
export default AwardTwoTone;