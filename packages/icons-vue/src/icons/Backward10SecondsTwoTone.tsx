// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Backward10SecondsTwoToneSvg from '@ant-design/icons-svg/lib/asn/Backward10SecondsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Backward10SecondsTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Backward10SecondsTwoTone: Backward10SecondsTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Backward10SecondsTwoToneSvg}></AntdIcon>;
};

Backward10SecondsTwoTone.displayName = 'Backward10SecondsTwoTone';
Backward10SecondsTwoTone.inheritAttrs = false;
export default Backward10SecondsTwoTone;