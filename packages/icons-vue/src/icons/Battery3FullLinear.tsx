// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Battery3FullLinearSvg from '@ant-design/icons-svg/lib/asn/Battery3FullLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Battery3FullLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Battery3FullLinear: Battery3FullLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Battery3FullLinearSvg}></AntdIcon>;
};

Battery3FullLinear.displayName = 'Battery3FullLinear';
Battery3FullLinear.inheritAttrs = false;
export default Battery3FullLinear;