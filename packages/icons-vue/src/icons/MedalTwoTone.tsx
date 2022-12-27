// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MedalTwoToneSvg from '@ant-design/icons-svg/lib/asn/MedalTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MedalTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MedalTwoTone: MedalTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MedalTwoToneSvg}></AntdIcon>;
};

MedalTwoTone.displayName = 'MedalTwoTone';
MedalTwoTone.inheritAttrs = false;
export default MedalTwoTone;