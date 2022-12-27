// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize3TwoToneSvg from '@ant-design/icons-svg/lib/asn/Maximize3TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize3TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize3TwoTone: Maximize3TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize3TwoToneSvg}></AntdIcon>;
};

Maximize3TwoTone.displayName = 'Maximize3TwoTone';
Maximize3TwoTone.inheritAttrs = false;
export default Maximize3TwoTone;