// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Logout1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Logout1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Logout1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Logout1TwoTone: Logout1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Logout1TwoToneSvg}></AntdIcon>;
};

Logout1TwoTone.displayName = 'Logout1TwoTone';
Logout1TwoTone.inheritAttrs = false;
export default Logout1TwoTone;