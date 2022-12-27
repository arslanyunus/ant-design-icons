// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenCloseBrokenSvg from '@ant-design/icons-svg/lib/asn/PenCloseBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenCloseBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenCloseBroken: PenCloseBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenCloseBrokenSvg}></AntdIcon>;
};

PenCloseBroken.displayName = 'PenCloseBroken';
PenCloseBroken.inheritAttrs = false;
export default PenCloseBroken;