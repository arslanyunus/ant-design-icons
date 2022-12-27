// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EraserLinearSvg from '@ant-design/icons-svg/lib/asn/EraserLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EraserLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EraserLinear: EraserLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EraserLinearSvg}></AntdIcon>;
};

EraserLinear.displayName = 'EraserLinear';
EraserLinear.inheritAttrs = false;
export default EraserLinear;