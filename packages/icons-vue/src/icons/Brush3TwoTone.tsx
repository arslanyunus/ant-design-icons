// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Brush3TwoToneSvg from '@ant-design/icons-svg/lib/asn/Brush3TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Brush3TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Brush3TwoTone: Brush3TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush3TwoToneSvg}></AntdIcon>;
};

Brush3TwoTone.displayName = 'Brush3TwoTone';
Brush3TwoTone.inheritAttrs = false;
export default Brush3TwoTone;