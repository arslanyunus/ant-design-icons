// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DangerLinearSvg from '@ant-design/icons-svg/lib/asn/DangerLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DangerLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DangerLinear: DangerLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DangerLinearSvg}></AntdIcon>;
};

DangerLinear.displayName = 'DangerLinear';
DangerLinear.inheritAttrs = false;
export default DangerLinear;