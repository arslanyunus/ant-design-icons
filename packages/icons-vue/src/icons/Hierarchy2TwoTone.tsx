// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Hierarchy2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Hierarchy2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Hierarchy2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Hierarchy2TwoTone: Hierarchy2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Hierarchy2TwoToneSvg}></AntdIcon>;
};

Hierarchy2TwoTone.displayName = 'Hierarchy2TwoTone';
Hierarchy2TwoTone.inheritAttrs = false;
export default Hierarchy2TwoTone;