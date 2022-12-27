// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RulerPenTwoToneSvg from '@ant-design/icons-svg/lib/asn/RulerPenTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RulerPenTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RulerPenTwoTone: RulerPenTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RulerPenTwoToneSvg}></AntdIcon>;
};

RulerPenTwoTone.displayName = 'RulerPenTwoTone';
RulerPenTwoTone.inheritAttrs = false;
export default RulerPenTwoTone;