// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Radar2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Radar2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Radar2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Radar2TwoTone: Radar2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Radar2TwoToneSvg}></AntdIcon>;
};

Radar2TwoTone.displayName = 'Radar2TwoTone';
Radar2TwoTone.inheritAttrs = false;
export default Radar2TwoTone;