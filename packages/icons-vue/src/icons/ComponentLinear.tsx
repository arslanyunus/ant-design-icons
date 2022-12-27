// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ComponentLinearSvg from '@ant-design/icons-svg/lib/asn/ComponentLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ComponentLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ComponentLinear: ComponentLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ComponentLinearSvg}></AntdIcon>;
};

ComponentLinear.displayName = 'ComponentLinear';
ComponentLinear.inheritAttrs = false;
export default ComponentLinear;