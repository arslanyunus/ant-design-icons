// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Brush4TwoToneSvg from '@ant-design/icons-svg/lib/asn/Brush4TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Brush4TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Brush4TwoTone: Brush4TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush4TwoToneSvg}></AntdIcon>;
};

Brush4TwoTone.displayName = 'Brush4TwoTone';
Brush4TwoTone.inheritAttrs = false;
export default Brush4TwoTone;