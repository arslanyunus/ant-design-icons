// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RulerPenBrokenSvg from '@ant-design/icons-svg/lib/asn/RulerPenBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RulerPenBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RulerPenBroken: RulerPenBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RulerPenBrokenSvg}></AntdIcon>;
};

RulerPenBroken.displayName = 'RulerPenBroken';
RulerPenBroken.inheritAttrs = false;
export default RulerPenBroken;