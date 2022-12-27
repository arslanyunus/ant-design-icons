// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TickCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/TickCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TickCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TickCircleBroken: TickCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TickCircleBrokenSvg}></AntdIcon>;
};

TickCircleBroken.displayName = 'TickCircleBroken';
TickCircleBroken.inheritAttrs = false;
export default TickCircleBroken;