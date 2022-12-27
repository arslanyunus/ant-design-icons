// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RowHorizontalLinearSvg from '@ant-design/icons-svg/lib/asn/RowHorizontalLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RowHorizontalLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RowHorizontalLinear: RowHorizontalLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RowHorizontalLinearSvg}></AntdIcon>;
};

RowHorizontalLinear.displayName = 'RowHorizontalLinear';
RowHorizontalLinear.inheritAttrs = false;
export default RowHorizontalLinear;