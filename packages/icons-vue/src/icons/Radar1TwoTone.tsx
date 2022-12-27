// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Radar1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Radar1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Radar1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Radar1TwoTone: Radar1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Radar1TwoToneSvg}></AntdIcon>;
};

Radar1TwoTone.displayName = 'Radar1TwoTone';
Radar1TwoTone.inheritAttrs = false;
export default Radar1TwoTone;