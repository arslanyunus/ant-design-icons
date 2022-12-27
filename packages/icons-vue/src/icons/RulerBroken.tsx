// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RulerBrokenSvg from '@ant-design/icons-svg/lib/asn/RulerBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RulerBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RulerBroken: RulerBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RulerBrokenSvg}></AntdIcon>;
};

RulerBroken.displayName = 'RulerBroken';
RulerBroken.inheritAttrs = false;
export default RulerBroken;