// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Routing2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Routing2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Routing2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Routing2TwoTone: Routing2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Routing2TwoToneSvg}></AntdIcon>;
};

Routing2TwoTone.displayName = 'Routing2TwoTone';
Routing2TwoTone.inheritAttrs = false;
export default Routing2TwoTone;