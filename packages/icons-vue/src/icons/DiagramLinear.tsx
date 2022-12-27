// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiagramLinearSvg from '@ant-design/icons-svg/lib/asn/DiagramLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiagramLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiagramLinear: DiagramLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiagramLinearSvg}></AntdIcon>;
};

DiagramLinear.displayName = 'DiagramLinear';
DiagramLinear.inheritAttrs = false;
export default DiagramLinear;