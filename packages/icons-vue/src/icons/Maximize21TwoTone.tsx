// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize21TwoToneSvg from '@ant-design/icons-svg/lib/asn/Maximize21TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize21TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize21TwoTone: Maximize21TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize21TwoToneSvg}></AntdIcon>;
};

Maximize21TwoTone.displayName = 'Maximize21TwoTone';
Maximize21TwoTone.inheritAttrs = false;
export default Maximize21TwoTone;