// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Simcard2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Simcard2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Simcard2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Simcard2TwoTone: Simcard2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Simcard2TwoToneSvg}></AntdIcon>;
};

Simcard2TwoTone.displayName = 'Simcard2TwoTone';
Simcard2TwoTone.inheritAttrs = false;
export default Simcard2TwoTone;