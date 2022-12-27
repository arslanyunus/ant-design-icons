// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TickSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/TickSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TickSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TickSquareBroken: TickSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TickSquareBrokenSvg}></AntdIcon>;
};

TickSquareBroken.displayName = 'TickSquareBroken';
TickSquareBroken.inheritAttrs = false;
export default TickSquareBroken;