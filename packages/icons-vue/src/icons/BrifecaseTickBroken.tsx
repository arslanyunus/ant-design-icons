// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BrifecaseTickBrokenSvg from '@ant-design/icons-svg/lib/asn/BrifecaseTickBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BrifecaseTickBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BrifecaseTickBroken: BrifecaseTickBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrifecaseTickBrokenSvg}></AntdIcon>;
};

BrifecaseTickBroken.displayName = 'BrifecaseTickBroken';
BrifecaseTickBroken.inheritAttrs = false;
export default BrifecaseTickBroken;