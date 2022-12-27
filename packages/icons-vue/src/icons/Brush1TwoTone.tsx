// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Brush1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Brush1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Brush1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Brush1TwoTone: Brush1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush1TwoToneSvg}></AntdIcon>;
};

Brush1TwoTone.displayName = 'Brush1TwoTone';
Brush1TwoTone.inheritAttrs = false;
export default Brush1TwoTone;