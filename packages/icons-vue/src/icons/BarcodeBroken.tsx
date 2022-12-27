// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BarcodeBrokenSvg from '@ant-design/icons-svg/lib/asn/BarcodeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BarcodeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BarcodeBroken: BarcodeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BarcodeBrokenSvg}></AntdIcon>;
};

BarcodeBroken.displayName = 'BarcodeBroken';
BarcodeBroken.inheritAttrs = false;
export default BarcodeBroken;