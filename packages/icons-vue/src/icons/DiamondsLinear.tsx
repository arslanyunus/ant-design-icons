// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiamondsLinearSvg from '@ant-design/icons-svg/lib/asn/DiamondsLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiamondsLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiamondsLinear: DiamondsLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiamondsLinearSvg}></AntdIcon>;
};

DiamondsLinear.displayName = 'DiamondsLinear';
DiamondsLinear.inheritAttrs = false;
export default DiamondsLinear;