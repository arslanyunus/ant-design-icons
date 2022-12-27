// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenToolBrokenSvg from '@ant-design/icons-svg/lib/asn/PenToolBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenToolBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenToolBroken: PenToolBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenToolBrokenSvg}></AntdIcon>;
};

PenToolBroken.displayName = 'PenToolBroken';
PenToolBroken.inheritAttrs = false;
export default PenToolBroken;