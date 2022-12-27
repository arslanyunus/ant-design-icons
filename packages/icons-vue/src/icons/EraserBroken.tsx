// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EraserBrokenSvg from '@ant-design/icons-svg/lib/asn/EraserBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EraserBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EraserBroken: EraserBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EraserBrokenSvg}></AntdIcon>;
};

EraserBroken.displayName = 'EraserBroken';
EraserBroken.inheritAttrs = false;
export default EraserBroken;