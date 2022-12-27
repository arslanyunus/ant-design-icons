// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RowVerticalBrokenSvg from '@ant-design/icons-svg/lib/asn/RowVerticalBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RowVerticalBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RowVerticalBroken: RowVerticalBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RowVerticalBrokenSvg}></AntdIcon>;
};

RowVerticalBroken.displayName = 'RowVerticalBroken';
RowVerticalBroken.inheritAttrs = false;
export default RowVerticalBroken;