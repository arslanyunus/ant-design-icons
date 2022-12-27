// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Shapes1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Shapes1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Shapes1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Shapes1TwoTone: Shapes1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Shapes1TwoToneSvg}></AntdIcon>;
};

Shapes1TwoTone.displayName = 'Shapes1TwoTone';
Shapes1TwoTone.inheritAttrs = false;
export default Shapes1TwoTone;