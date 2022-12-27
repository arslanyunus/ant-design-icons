// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Hierarchy3TwoToneSvg from '@ant-design/icons-svg/lib/asn/Hierarchy3TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Hierarchy3TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Hierarchy3TwoTone: Hierarchy3TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Hierarchy3TwoToneSvg}></AntdIcon>;
};

Hierarchy3TwoTone.displayName = 'Hierarchy3TwoTone';
Hierarchy3TwoTone.inheritAttrs = false;
export default Hierarchy3TwoTone;