// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Brush2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Brush2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Brush2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Brush2TwoTone: Brush2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush2TwoToneSvg}></AntdIcon>;
};

Brush2TwoTone.displayName = 'Brush2TwoTone';
Brush2TwoTone.inheritAttrs = false;
export default Brush2TwoTone;