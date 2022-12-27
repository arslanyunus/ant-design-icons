// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Backward15SecondsTwoToneSvg from '@ant-design/icons-svg/lib/asn/Backward15SecondsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Backward15SecondsTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Backward15SecondsTwoTone: Backward15SecondsTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Backward15SecondsTwoToneSvg}></AntdIcon>;
};

Backward15SecondsTwoTone.displayName = 'Backward15SecondsTwoTone';
Backward15SecondsTwoTone.inheritAttrs = false;
export default Backward15SecondsTwoTone;