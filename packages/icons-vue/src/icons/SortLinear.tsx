// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SortLinearSvg from '@ant-design/icons-svg/lib/asn/SortLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SortLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SortLinear: SortLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SortLinearSvg}></AntdIcon>;
};

SortLinear.displayName = 'SortLinear';
SortLinear.inheritAttrs = false;
export default SortLinear;