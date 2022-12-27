// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TickCircleBoldSvg from '@ant-design/icons-svg/lib/asn/TickCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TickCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TickCircleBold: TickCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TickCircleBoldSvg}></AntdIcon>;
};

TickCircleBold.displayName = 'TickCircleBold';
TickCircleBold.inheritAttrs = false;
export default TickCircleBold;