// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RulerTwoToneSvg from '@ant-design/icons-svg/lib/asn/RulerTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RulerTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RulerTwoTone: RulerTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RulerTwoToneSvg}></AntdIcon>;
};

RulerTwoTone.displayName = 'RulerTwoTone';
RulerTwoTone.inheritAttrs = false;
export default RulerTwoTone;