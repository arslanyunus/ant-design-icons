// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Lamp1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Lamp1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Lamp1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Lamp1TwoTone: Lamp1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Lamp1TwoToneSvg}></AntdIcon>;
};

Lamp1TwoTone.displayName = 'Lamp1TwoTone';
Lamp1TwoTone.inheritAttrs = false;
export default Lamp1TwoTone;