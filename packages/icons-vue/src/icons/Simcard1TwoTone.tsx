// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Simcard1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Simcard1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Simcard1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Simcard1TwoTone: Simcard1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Simcard1TwoToneSvg}></AntdIcon>;
};

Simcard1TwoTone.displayName = 'Simcard1TwoTone';
Simcard1TwoTone.inheritAttrs = false;
export default Simcard1TwoTone;