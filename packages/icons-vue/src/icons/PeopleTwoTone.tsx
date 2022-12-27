// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PeopleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PeopleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PeopleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PeopleTwoTone: PeopleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PeopleTwoToneSvg}></AntdIcon>;
};

PeopleTwoTone.displayName = 'PeopleTwoTone';
PeopleTwoTone.inheritAttrs = false;
export default PeopleTwoTone;