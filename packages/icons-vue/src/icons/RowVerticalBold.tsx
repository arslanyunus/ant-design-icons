// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RowVerticalBoldSvg from '@ant-design/icons-svg/lib/asn/RowVerticalBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RowVerticalBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RowVerticalBold: RowVerticalBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RowVerticalBoldSvg}></AntdIcon>;
};

RowVerticalBold.displayName = 'RowVerticalBold';
RowVerticalBold.inheritAttrs = false;
export default RowVerticalBold;