// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Maximize2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize2TwoTone: Maximize2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize2TwoToneSvg}></AntdIcon>;
};

Maximize2TwoTone.displayName = 'Maximize2TwoTone';
Maximize2TwoTone.inheritAttrs = false;
export default Maximize2TwoTone;