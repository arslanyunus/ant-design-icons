// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RowVerticalLinearSvg from '@ant-design/icons-svg/lib/asn/RowVerticalLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RowVerticalLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RowVerticalLinear: RowVerticalLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RowVerticalLinearSvg}></AntdIcon>;
};

RowVerticalLinear.displayName = 'RowVerticalLinear';
RowVerticalLinear.inheritAttrs = false;
export default RowVerticalLinear;