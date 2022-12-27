// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RowHorizontalBrokenSvg from '@ant-design/icons-svg/lib/asn/RowHorizontalBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RowHorizontalBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RowHorizontalBroken: RowHorizontalBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RowHorizontalBrokenSvg}></AntdIcon>;
};

RowHorizontalBroken.displayName = 'RowHorizontalBroken';
RowHorizontalBroken.inheritAttrs = false;
export default RowHorizontalBroken;