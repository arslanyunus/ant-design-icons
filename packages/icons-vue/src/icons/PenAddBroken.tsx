// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenAddBrokenSvg from '@ant-design/icons-svg/lib/asn/PenAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenAddBroken: PenAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenAddBrokenSvg}></AntdIcon>;
};

PenAddBroken.displayName = 'PenAddBroken';
PenAddBroken.inheritAttrs = false;
export default PenAddBroken;