// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PauseBrokenSvg from '@ant-design/icons-svg/lib/asn/PauseBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PauseBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PauseBroken: PauseBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PauseBrokenSvg}></AntdIcon>;
};

PauseBroken.displayName = 'PauseBroken';
PauseBroken.inheritAttrs = false;
export default PauseBroken;