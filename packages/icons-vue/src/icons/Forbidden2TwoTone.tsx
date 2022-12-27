// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Forbidden2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Forbidden2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Forbidden2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Forbidden2TwoTone: Forbidden2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Forbidden2TwoToneSvg}></AntdIcon>;
};

Forbidden2TwoTone.displayName = 'Forbidden2TwoTone';
Forbidden2TwoTone.inheritAttrs = false;
export default Forbidden2TwoTone;